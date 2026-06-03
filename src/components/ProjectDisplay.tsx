import { useCallback, useEffect, useRef, type TouchEvent } from 'react';
import gsap from 'gsap';
import type { SlideType } from '../types/carouselTypes';
import { DotButton } from './CarouselDotButton';

type ProjectDisplayProps = {
  slides: SlideType[];
  actualSlide: SlideType;
  slideDirection: 'left' | 'right' | null;
  onChangeSlide: (index: number, direction: 'left' | 'right') => void;
};

export function ProjectDisplay({
  slides,
  actualSlide,
  slideDirection,
  onChangeSlide,
}: ProjectDisplayProps) {
  const slideRefs = useRef<(HTMLImageElement | null)[]>([]);

  const animateSlide = useCallback(
    (direction: 'left' | 'right', targetIndex: number) => {
      const nextIdx = targetIndex;
      const currentIdx =
        direction === 'left'
          ? targetIndex === 0
            ? slides.length - 1
            : targetIndex - 1
          : (targetIndex + 1) % slides.length;

      const currentEl = slideRefs.current[currentIdx];
      const nextEl = slideRefs.current[nextIdx];

      if (!currentEl || !nextEl) return;

      gsap.set([currentEl, nextEl], { x: 0, opacity: 1 });

      if (direction === 'left') {
        gsap.fromTo(
          nextEl,
          { x: '100%', opacity: 0 },
          { x: '0%', opacity: 1, duration: 0.4, ease: 'power2.out' }
        );
        gsap.fromTo(
          currentEl,
          { x: '0%', opacity: 1 },
          { x: '-100%', opacity: 0, duration: 0.4, ease: 'power2.out' }
        );
      } else {
        gsap.fromTo(
          nextEl,
          { x: '-100%', opacity: 0 },
          { x: '0%', opacity: 1, duration: 0.4, ease: 'power2.out' }
        );
        gsap.fromTo(
          currentEl,
          { x: '0%', opacity: 1 },
          { x: '100%', opacity: 0, duration: 0.4, ease: 'power2.out' }
        );
      }
    },
    [slides.length]
  );

  useEffect(() => {
    if (slideDirection === null) return;

    animateSlide(slideDirection, actualSlide.num - 1);
  }, [actualSlide.num, animateSlide, slideDirection]);

  const handleDotClick = (index: number) => {
    const currentIdx = actualSlide.num - 1;

    if (index === currentIdx) return;

    const direction = index > currentIdx ? 'left' : 'right';
    onChangeSlide(index, direction);
  };

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const swipeDistance = touchEndX.current - touchStartX.current;
    const currentIdx = actualSlide.num - 1;

    if (swipeDistance > minSwipeDistance) {
      const nextIndex =
        currentIdx - 1 >= 0 ? currentIdx - 1 : slides.length - 1;
      onChangeSlide(nextIndex, 'right');
    } else if (swipeDistance < -minSwipeDistance) {
      const nextIndex = currentIdx + 1 < slides.length ? currentIdx + 1 : 0;
      onChangeSlide(nextIndex, 'left');
    }
  };

  const selectedIndex = actualSlide.num - 1;

  return (
    <div className='w-72 h-70 lg:w-186.75 lg:h-96 relative flex flex-col lg:items-end justify-end'>
      <img
        className='absolute z-20 top-0 right-4 lg:right-15 w-20 h-20 lg:w-34.25 lg:h-34.25 object-cover'
        src={actualSlide.imgsSecondary && actualSlide.imgsSecondary[0]}
        alt=''
      />
      <img
        className='absolute w-34.25 left-0 bottom-18 h-34.25 object-cover hidden lg:block'
        src={actualSlide.imgsSecondary && actualSlide.imgsSecondary[1]}
        alt=''
      />
      <div
        className='relative w-72 h-54 lg:w-114.5 lg:h-85.75 flex items-center justify-center overflow-hidden'
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((slide, index) => {
          return (
            <img
              key={index}
              ref={(el) => {
                slideRefs.current[index] = el;
              }}
              className={`absolute object-cover top-0 left-0 h-full ${actualSlide.num == index + 1 ? 'block' : 'invisible'}`}
              src={slide.img}
              alt=''
            />
          );
        })}
      </div>
      <div className='p-l flex gap-s items-center justify-center lg:hidden'>
        {slides.map((_, index) => {
          return (
            <DotButton
              key={index}
              className={`w-2 h-2 rounded-border-xxl cursor-pointer ${selectedIndex == index ? 'bg-brand-primary' : 'bg-neutral-disabled'}`}
              onClick={() => handleDotClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
