import type React from 'react';
import Globe from '../assets/icons/Globe.svg?react';

type IconAnchorProps = {
  icon?: React.ReactNode;
  link: string;
};

export function IconAnchor({
  icon = <Globe />,
  link = 'https://example.com/',
}: IconAnchorProps) {
  return (
    <div className='bg-neutral-tertiary h-14 w-14 flex items-center justify-center rounded-border-l border border-neutral-inverse-primary'>
      <a href={link} className='text-neutral-tertiary hover:text-brand-primary' target='_blank' rel='noopener noreferrer'>
        {icon}
      </a>
    </div>
  );
}
