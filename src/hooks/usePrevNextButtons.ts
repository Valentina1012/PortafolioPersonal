import { useCallback, type Dispatch, type SetStateAction } from 'react';
import type { SlideType, UsePrevNextButtonsType } from '../types/carouselTypes';

export const usePrevNextButtons = (
  slides: SlideType[],
  setActualSlide: Dispatch<SetStateAction<SlideType>>,
  actualSlide: SlideType
): UsePrevNextButtonsType => {
  const canScrollPrev = actualSlide?.num > slides[0].num;
  const canScrollNext = actualSlide?.num < slides[slides.length - 1].num;

  const onPrevButtonClick = useCallback(() => {
    if (canScrollPrev) {
      const newIndex = actualSlide.num - 2;
      setActualSlide(slides[newIndex]);
      return;
    }
    // Si está en la primer slide, vuelve a la última
    setActualSlide(slides[slides.length - 1]);
  }, [slides, canScrollPrev, setActualSlide, actualSlide.num]);

  const onNextButtonClick = useCallback(() => {
    if (canScrollNext) {
      const newIndex = actualSlide.num;
      setActualSlide(slides[newIndex]);
      return;
    }
    // Si está en la última slide, vuelve a la primera
    setActualSlide(slides[0]);
  }, [slides, canScrollNext, setActualSlide, actualSlide.num]);

  return { onPrevButtonClick, onNextButtonClick, canScrollPrev, canScrollNext };
};
