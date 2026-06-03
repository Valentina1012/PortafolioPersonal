import Github from '../assets/icons/GithubLogo.svg?react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const variants = cva(['text-neutral-inverse-tertiary body-bold'], {
  variants: {
    size: {
      small: 'block',
      large: 'hidden',
    }
  },
  defaultVariants: {
    size: 'large',
  },
});

type NetworkProps = VariantProps<typeof variants> & {
  logo?: React.ReactNode;
  name: string;
};

export function Network({ logo= <Github />, name='Lorem ipsum', size }: NetworkProps) {
  return (
    <div className='flex items-center gap-s'>
      <span className='rounded-border-xl border border-neutral-primary p-m text-neutral-inverse-tertiary'>
        {logo}
      </span>
      <p className={cn(variants({ size }))}>
        {name}
      </p>
    </div>
  );
}
