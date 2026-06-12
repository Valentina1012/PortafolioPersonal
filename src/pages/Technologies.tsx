import {
  SectionBody,
  SectionTitle,
  TechCard,
  TechNavigation,
} from '../components';
import { techs } from '../data/techs.tsx';
import { useTechStore } from '../store/Technologies.ts';

export default function Technologies() {
  const { tech } = useTechStore((state) => state);

  return (
    <section className='min-h-screen mx-l lg:max-w-273.75 lg:mx-auto flex flex-col justify-center gap-6'>
      <SectionTitle title='Tecnologias' />
      <SectionBody>
        Estas son algunas de las tecnologías con las que trabajo habitualmente,
        abarcando distintas etapas del proceso de desarrollo, desde el
        prototipado hasta la implementación y mantenimiento de interfaces web.
      </SectionBody>
      <hr className='text-neutral-inverse-tertiary' />
      <div className='w-full flex justify-center'>
        <TechNavigation />
      </div>
      <div className='flex flex-col w-61 mx-auto lg:w-full lg:flex-row [&>*:nth-child(even)]:self-end lg:[&>*:nth-child(even)]:justify-end'>
        {techs.map((t, index) => {
          if (t.category === tech.type)
            return (
              <div
                className={`flex flex-col h-30 lg:h-75 ${index !== 0 && index !== 1 ? 'lg:-ml-12' : ''}`}
                key={index}
              >
                <TechCard icon={t.img} />
              </div>
            );
        })}
      </div>
    </section>
  );
}
