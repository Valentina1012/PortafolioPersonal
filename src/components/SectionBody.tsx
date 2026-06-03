import type { PropsWithChildren } from 'react';

export function SectionBody({ children }: PropsWithChildren) {
  return <p className='text-neutral-secondary'>{children}</p>;
}
