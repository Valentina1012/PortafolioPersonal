import { VALogo } from '../assets/logos';
import { Network } from '../components';
import { footerData } from '../data/footerData';

export default function Footer() {
  return (
    <section className='relative bg-miscellaneous-secondary h-104 flex flex-col items-center justify-center gap-xl px-l'>
      <div className='flex flex-col lg:flex-row lg:w-[821.25px] xl:w-273.75 justify-between lg:mx-auto'>
        <VALogo />
        <div className='flex flex-col gap-l lg:flex-row'>
          <p className='text-neutral-disabled body-bold lg:hidden'>Social</p>
          {footerData.map((d, index) => {
            return (
              <Network key={index} name={d.title} link={d.link} logo={d.icon} />
            );
          })}
        </div>
      </div>
      <div className='absolute flex flex-col lg:flex-row gap-xs bottom-2 left-4 lg:bottom-1/16 lg:left-8'>
        <p className='text-neutral-secondary'>Valentina Alvarez, 2026.</p>
        <p className='text-neutral-secondary'>
          Construido con React, Typescript & Vite
        </p>
      </div>
    </section>
  );
}
