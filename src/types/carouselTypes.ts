import type { Dispatch, SetStateAction, ReactNode } from 'react';
import type { ImgHTMLAttributes } from 'react';

export type SlideType = {
  num: number;
  name: string;
  description: string;
  img: ImgHTMLAttributes<HTMLImageElement>['src'];
  imgsSecondary?: ImgHTMLAttributes<HTMLImageElement>['src'][];
  linkDeploy: string;
  linkRepository: string;
  techs: { name: string; icon: ReactNode }[];
};

export type UsePrevNextButtonsType = {
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
};

export type UseDotButtonType = {
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  onDotButtonClick: (
    index: number,
    setSlideDirection: Dispatch<SetStateAction<'left' | 'right' | null>>,
    animateSlide: (direction: 'left' | 'right') => void
  ) => void;
};
