import Code from '../assets/icons/Code.svg?react';

type TechTagProps = {
  name: string;
  icon?: React.ReactNode;
};

export function TechTag({
  name = 'Tech',
  icon = <Code />,
}: TechTagProps) {
  return (
    <div className='flex gap-s w-fit p-s border-width-s rounded-border-xs border-neutral-inverse-primary items-center'>
      <span className='text-icon-neutral-disabled'>{icon}</span>
      <p className='text-neutral-tertiary'>{name}</p>
    </div>
  );
}
