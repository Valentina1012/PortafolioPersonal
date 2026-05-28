import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { usePrevNextButtons } from '../hooks/usePrevNextButtons';
import { NextButton, PrevButton } from './CarouselArrowButtons';
import type { SlideType } from '../types/carouselTypes';
import { DotButton } from './CarouselDotButton';

export default function ProjectDisplay({ slides }: { slides: SlideType[] }) {
  const [actualSlide, setActualSlide] = useState(slides[0]);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(
    null
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const slideRefs = useRef<(HTMLImageElement | null)[]>([]);

  const { onPrevButtonClick, onNextButtonClick, canScrollPrev, canScrollNext } =
    usePrevNextButtons(slides, setActualSlide, actualSlide, setSelectedIndex);

  // Función para la animación de GSAP
  const animateSlide = (direction: 'left' | 'right', targetIndex?: number) => {
    const currentIdx = actualSlide.num - 1;
    const nextIdx =
      targetIndex !== undefined
        ? targetIndex
        : direction === 'left'
          ? (currentIdx + 1) % slides.length
          : (currentIdx - 1 + slides.length) % slides.length;

    const currentEl = slideRefs.current[currentIdx];
    const nextEl = slideRefs.current[nextIdx];
    
    if (!currentEl || !nextEl) return;

    // Resetea las posiciones y visibilidad
    gsap.set([currentEl, nextEl], { x: 0, opacity: 1 });

    if (direction === 'left') {
      // Va hacia la siguiente: La actual se desliza a la izquierda y la siguiente entra desde la derecha
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
      // Va hacia la anterior: La actual se desliza a la derecha y la siguiente entra desde la izquierda
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
  };

  // Wrapper para dot buttons que también activa la animación GSAP
  const handleDotClick = (index: number) => {
    const currentIdx = actualSlide.num - 1;

    if (index === currentIdx) return; // Ya está en ese slide

    const direction = index > currentIdx ? 'left' : 'right';
    setSlideDirection(direction);
    animateSlide(direction, index);

    setActualSlide(slides[index]);
    setSelectedIndex(index);
  };

  // Manejadores para la animación de GSAP y cambio de slide
  const handlePrevClick = () => {
    setSlideDirection('right');
    animateSlide('right');
    onPrevButtonClick();
  };

  const handleNextClick = () => {
    setSlideDirection('left');
    animateSlide('left');
    onNextButtonClick();
  };

  // Manejadores para swipe en móviles
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const swipeDistance = touchEndX.current - touchStartX.current;

    if (swipeDistance > minSwipeDistance && canScrollPrev) {
      setSlideDirection('right');
      animateSlide('right');
      onPrevButtonClick();
    } else if (swipeDistance < -minSwipeDistance && canScrollNext) {
      setSlideDirection('left');
      animateSlide('left');
      onNextButtonClick();
    }
  };

  // Limpiar la dirección de la animación
  useEffect(() => {
    if (slideDirection) {
      const timer = setTimeout(() => setSlideDirection(null), 400);
      return () => clearTimeout(timer);
    }
  }, [actualSlide, slideDirection]);

  return (
    <div className='w-72 h-70 lg:w-163 lg:h-90 relative flex flex-col lg:items-end justify-end'>
      <img
        className='absolute z-20 top-0 right-15 w-20 h-20 lg:w-30 lg:h-30 object-cover'
        src={actualSlide.imgsSecondary && actualSlide.imgsSecondary[0]}
        alt=''
      />
      <img
        className='absolute w-30 left-0 bottom-18 h-30 object-cover hidden lg:block'
        src={actualSlide.imgsSecondary && actualSlide.imgsSecondary[1]}
        alt=''
      />
      <div
        className='relative w-72 h-54 lg:w-100 lg:h-75 flex items-center justify-center overflow-hidden'
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
        <div className='gap-s absolute top-0 left-0 hidden lg:flex'>
          <PrevButton onClick={handlePrevClick} />
          <NextButton onClick={handleNextClick} />
        </div>
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
