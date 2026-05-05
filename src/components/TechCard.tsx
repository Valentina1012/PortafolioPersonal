import React from '../assets/logos/ReactLogo.svg?react';

type TechCardProps = {
  name: string;
  icon?: React.ReactNode;
};

export default function TechCard({
  name = 'Tech',
  icon = <React />,
}: TechCardProps) {
  return (
    <div className='flex flex-col bg-miscellaneous-primary p-l gap-l items-center justify-center rounded-border-xl border border-neutral-inverse-primary w-34.5 h-[182.5px] lg:h-63.75 lg:w-45'>
      <span className='text-background-neutral-disabled'>{icon}</span>
      <p className='text-neutral-secondary'>{name}</p>
    </div>
  );
}
