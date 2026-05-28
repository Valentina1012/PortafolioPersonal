import { useState } from 'react';
import gsap from 'gsap';

export default function TechNavigation() {
  const [activeTech, setActiveTech] = useState({
    num: '0',
    positionX: 0,
  });

  const techsWidth: Record<string, number> = {
    '0': 91.34,
    '1': 83.8,
    '2': 121.67,
  };

  const xPositions: Record<string, number> = {
    '0': 0,
    '1': 104.9375,
    '2': 202.328125,
  };

  const animateSlide = (targetIndex: string) => {
    if (targetIndex === activeTech.num) return;

    gsap.fromTo(
      '.boton',
      { x: `${xPositions[activeTech.num]}` },
      { x: `${xPositions[targetIndex]}`, duration: 0.4, ease: 'power3.out' }
    );

    gsap.to('.boton', { width: `${techsWidth[targetIndex]}px`, duration: 0.4, ease: 'power2.out' });
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const techId = event.currentTarget.id;
    const position = event.currentTarget.getBoundingClientRect();
    animateSlide(techId);
    if (techId) {
      setActiveTech({ num: techId, positionX: position.x });
    }
  };

  return (
    <div className='relative rounded-border-xl border border-neutral-inverse-primary p-xs h-11.75 w-83.5 flex items-center justify-between'>
      <button
        id='0'
        className={`small-bold relative  p-m rounded-border-xxl z-10 uppercase ${activeTech.num == '0' ? 'relative text-neutral-inverse-primary' : 'bg-transparent text-neutral-secondary'}`}
        onClick={handleClick}
      >
        frontend
      </button>
      <button
        id='1'
        className={`small-bold relative p-m rounded-border-xxl z-10 uppercase ${activeTech.num == '1' ? 'relative text-neutral-inverse-primary' : 'bg-transparent text-neutral-secondary'}`}
        onClick={handleClick}
      >
        backend
      </button>
      <button
        id='2'
        className={`small-bold relative p-m rounded-border-xxl z-10 uppercase ${activeTech.num == '2' ? 'text-neutral-inverse-primary' : 'bg-transparent text-neutral-secondary'}`}
        onClick={handleClick}
      >
        herramientas
      </button>
      <div className='w-full absolute left-0.75 top-0.75 h-9.75 z-0 flex'>
        <div
          className={`boton h-full rounded-border-xxl bg-neutral-inverse-secondary absolute w-[91.34px]`}
        ></div>
      </div>
    </div>
  );
}
