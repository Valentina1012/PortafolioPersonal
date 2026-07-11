import { VALogo } from '../assets/logos';
import { Network } from '../components';
import { footerData } from '../data/footerData';

export default function Footer() {
  return (
    <section className='bg-miscellaneous-secondary'>
      <div className='max-w-273.75 mx-auto flex flex-col pt-8 px-l gap-xl lg:justify-between h-132 pb-9 lg:pt-29 xl:px-0 lg:px-33 lg:h-96 '>
        <div className='flex flex-col gap-xl lg:flex-row w-full justify-between'>
          <VALogo />
          <div className='flex flex-col gap-l lg:flex-row'>
            <p className='text-neutral-disabled body-bold lg:hidden'>Social</p>
            {footerData.map((d, index) => {
              return (
                <Network
                  key={index}
                  name={d.title}
                  link={d.link}
                  logo={d.icon}
                />
              );
            })}
          </div>
        </div>
        <div className='flex pt-16 gap-xl flex-col lg:flex-row w-full justify-between text-neutral-secondary'>
          <div className='flex flex-col lg:flex-row gap-xs'>
            <p>Valentina Alvarez, 2026.</p>
            <p>Construido con React, Typescript & Vite</p>
          </div>
          <div className='flex gap-6'>
            <a href='https://www.figma.com/design/wghsVH4IQ08l7fdtlXAjvv/Portfolio?node-id=455-1631&t=YlG2XGNosdQbK4Sf-1'>
              Diseño de Figma
            </a>
            <span>|</span>
            <a href='https://github.com/Valentina1012/PortafolioPersonal'>
              Repositorio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
