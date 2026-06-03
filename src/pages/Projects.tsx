import { useState } from 'react';
import { ProjectCard, ProjectDisplay, SectionTitle } from '../components';
import { NextButton, PrevButton } from '../components/CarouselArrowButtons';
import { slides } from '../data/slides.tsx';
import { usePrevNextButtons } from '../hooks/usePrevNextButtons';
import type { SlideType } from '../types/carouselTypes';

export default function Projects() {
  const [actualSlide, setActualSlide] = useState<SlideType>(slides[0]);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(
    null
  );
  const selectedIndex = actualSlide.num - 1;

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(
    slides,
    setActualSlide,
    actualSlide
  );

  const handlePrevClick = () => {
    setSlideDirection('right');
    onPrevButtonClick();
  };

  const handleNextClick = () => {
    setSlideDirection('left');
    onNextButtonClick();
  };

  const handleChangeSlide = (index: number, direction: 'left' | 'right') => {
    if (index === selectedIndex) return;
    setSlideDirection(direction);
    setActualSlide(slides[index]);
  };

  return (
    <section className='min-h-screen mx-l w-fit lg:max-w-273.75 lg:mx-auto flex flex-col justify-center'>
      <div className='flex justify-between items-center max-w-60'>
        <SectionTitle title='Proyectos' />
        <div className='mt-s flex justify-center gap-s lg:justify-end'>
          <PrevButton onClick={handlePrevClick} />
          <NextButton onClick={handleNextClick} />
        </div>
      </div>
      <ProjectCard slide={actualSlide} />
      <div className='w-full flex justify-center lg:justify-end mt-6 lg:mt-0'>
        <ProjectDisplay
          actualSlide={actualSlide}
          slides={slides}
          slideDirection={slideDirection}
          onChangeSlide={handleChangeSlide}
        />
      </div>
    </section>
  );
}
