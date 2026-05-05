import CaretLeft from '../assets/icons/CaretLeft.svg?react';
import CaretRight from '../assets/icons/CaretRight.svg?react';

export const PrevButton = ({ ...props }) => {
  const { children, ...restProps } = props;

  return (
    <button
      className={`cursor-pointer border border-neutral-primary rounded-border-s w-10 h-10 bg-transparent p-xs text-neutral-secondary`}
      type='button'
      {...restProps}
    >
      <CaretLeft />
      {children}
    </button>
  );
};

export const NextButton = ({ ...props }) => {
  const { children, ...restProps } = props;

  return (
    <button
      className={`cursor-pointer border border-neutral-primary rounded-border-s w-10 h-10 bg-transparent p-xs text-neutral-secondary`}
      type='button'
      {...restProps}
    >
      <CaretRight />
      {children}
    </button>
  );
};
