import Star from '../assets/icons/Star.svg?react';

export function ContactButton() {
  return (
    <a className='w-40 h-15 flex items-center justify-center rounded-border-s bg-neutral-inverse-primary border border-neutral-inverse-primary body-bold text-[#F3F2F2] relative group hover:-rotate-12 transition-all duration-300 hover:shadow-[4px_5px_1px_rgba(255,255,255,1)] cursor-pointer' href='https://mail.google.com/mail/?view=cm&fs=1&to=alvarezcoelhovalentina@gmail.com&su=Contacto%20desde%20Portfolio' target='_blank' rel='noopener noreferrer'>
      <div className='w-full h-full absolute overflow-clip'>
        <div className='flex gap-0.5 rotate-[22.5deg] absolute -left-8.25 -top-4.5 group-hover:left-46 transition-all duration-300 overflow-clip'>
          <div className='w-2 h-25 bg-neutral-primary mix-blend-difference'></div>
          <div className='w-0.5 h-25 bg-neutral-primary mix-blend-difference'></div>
        </div>
      </div>
      Contactar
      <div className='absolute w-[176.33px] h-[76.33px] opacity-0 group-hover:opacity-100 transition-all duration-400 mix-blend-difference'>
        <Star className='absolute -top-0 left-0 rotate-[-24.5deg] ' />
        <Star className='absolute left-[24.14px] top-[4.78px] w-[12.5px] rotate-[18.5deg]' />
        <Star className='absolute bottom-[0px] left-[157.1467px] w-[12.5px] rotate-[24.5deg]' />
      </div>
    </a>
  );
}
