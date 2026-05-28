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
    <div className='flex flex-col bg-miscellaneous-primary p-l gap-l items-center justify-center rounded-full border border-neutral-inverse-primary w-50 h-50'>
      <span className='text-background-neutral-disabled'>{icon}</span>
      {/* <p className='text-neutral-secondary'>{name}</p> */}
    </div>
  );
}
