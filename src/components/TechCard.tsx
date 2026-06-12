import React from '../assets/logos/ReactLogo.svg?react';

type TechCardProps = {
  icon?: React.ReactNode;
};

export function TechCard({
  icon = <React />,
}: TechCardProps) {
  return (
    <div className='flex flex-col bg-miscellaneous-primary p-l gap-l items-center justify-center rounded-full border border-neutral-inverse-primary w-30 h-30 lg:w-50 lg:h-50'>
      <span className='text-background-neutral-disabled'>{icon}</span>
    </div>
  );
}
