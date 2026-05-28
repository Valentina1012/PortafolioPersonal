import CaretLeft from '../assets/icons/CaretLeft.svg?react';
import CaretRight from '../assets/icons/CaretRight.svg?react';

export const PrevButton = ({ ...props }) => {
  const { children, ...restProps } = props;

  return (
    <button
      className={`cursor-pointer border border-neutral-inverse-primary rounded-border-xxl w-10 h-10 bg-transparent p-xs text-neutral-secondary`}
      type='button'
      {...restProps}
    >
      <CaretLeft className='text-neutral-tertiary'/>
      {children}
    </button>
  );
};

export const NextButton = ({ ...props }) => {
  const { children, ...restProps } = props;

  return (
    <button
      className={`cursor-pointer border border-neutral-inverse-primary rounded-border-xxl w-10 h-10 bg-transparent p-xs text-neutral-secondary`}
      type='button'
      {...restProps}
    >
      <CaretRight className='text-neutral-tertiary'/>
      {children}
    </button>
  );
};
