import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { TechAnchor } from './';
import { techsType } from '../data/techsType';
import { useTechStore } from '../store/Technologies.ts';

export function TechNavigation() {
  const { tech, setTech } = useTechStore((state) => state);
  const containerRef = useRef<HTMLDivElement>(null);

  const [xPositions, setXPositions] = useState<Record<string, number>>({});
  const [techsWidth, setTechsWidth] = useState<Record<string, number>>({});

  // Calcular posiciones y anchos dinámicamente
  useEffect(() => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const newXPositions: Record<string, number> = {};
    const newTechsWidth: Record<string, number> = {};

    techsType.forEach((t) => {
      const button = containerRef.current?.querySelector(
        `[data-tech="${t.name.toLowerCase()}"]`
      ) as HTMLButtonElement;
      if (button) {
        const buttonRect = button.getBoundingClientRect();
        // Posición relativa al contenedor
        newXPositions[t.name.toLowerCase()] =
          buttonRect.left - containerRect.left;
        newTechsWidth[t.name.toLowerCase()] = buttonRect.width;
      }
    });

    setXPositions(newXPositions);
    setTechsWidth(newTechsWidth);

    const initialX = newXPositions[tech.type] ?? 0;
    const initialWidth = newTechsWidth[tech.type] ?? 91.34;
    gsap.set('.boton', { x: initialX, width: initialWidth });
  }, [tech.type]);

  // Recalcular al redimensionar la ventana
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const newXPositions: Record<string, number> = {};
      const newTechsWidth: Record<string, number> = {};

      techsType.forEach((t) => {
        const button = containerRef.current?.querySelector(
          `[data-tech="${t.name.toLowerCase()}"]`
        ) as HTMLButtonElement;
        if (button) {
          const buttonRect = button.getBoundingClientRect();
          newXPositions[t.name.toLowerCase()] =
            buttonRect.left - containerRect.left;
          newTechsWidth[t.name.toLowerCase()] = buttonRect.width;
        }
      });

      setXPositions(newXPositions);
      setTechsWidth(newTechsWidth);

      const activeX = newXPositions[tech.type] ?? 0;
      const activeWidth = newTechsWidth[tech.type] ?? 91.34;
      gsap.set('.boton', { x: activeX, width: activeWidth });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [tech.type]);

  const animateSlide = (techType: string) => {
    if (techType === tech.type) return;

    gsap.fromTo(
      '.boton',
      { x: `${xPositions[tech.type] ?? 0}` },
      { x: `${xPositions[techType] ?? 0}`, duration: 0.4, ease: 'power3.out' }
    );
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const techType = event.currentTarget.textContent?.toLowerCase();

    animateSlide(techType);
    if (techType) {
      setTech({ type: techType });
    }
  };

  return (
    <div
      ref={containerRef}
      className='relative rounded-border-xl border border-neutral-inverse-primary p-xs h-11.75 w-66.5 flex items-center justify-between'
    >
      {techsType.map((t, index) => {
        return (
          <TechAnchor
            key={index}
            activeTech={tech}
            handleClick={handleClick}
            content={t.name}
          />
        );
      })}

      <div className='w-full absolute left-0 top-0.75 h-9.75 z-0 flex'>
        <div
          className={`boton h-full rounded-border-xxl bg-neutral-inverse-secondary absolute`}
          style={{
            width: techsWidth[tech.type]
              ? `${techsWidth[tech.type]}px`
              : '91.34px',
          }}
        ></div>
      </div>
    </div>
  );
}
