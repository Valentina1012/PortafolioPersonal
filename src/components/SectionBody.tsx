import type { PropsWithChildren } from 'react';

export default function SectionBody({ children }: PropsWithChildren) {
  return <p className='text-neutral-secondary'>{children}</p>;
}
