import SectionTitle from '../components/SectionTitle';
import SectionBody from '../components/SectionBody';
import AboutCard from '../components/AboutCard';
import { aboutCardsData } from '../data/aboutCards.tsx';

export default function AboutMe() {
  return (
    <section className='mt-4 lg:mt-0 min-h-screen mx-l w-fit lg:max-w-273.75 lg:mx-auto flex flex-col justify-center'>
      <SectionTitle title='Sobre mi' />
      <div className='lg:w-218 pt-3'>
        <SectionBody>
          Soy estudiante y desarrolladora enfocada en el desarrollo web
          frontend.Entre mis principales intereses se encuentran la ilustración, las
          animaciones y la creación de interfaces con una estética minimalista y
          visual equilibrada.
        </SectionBody>
        <SectionBody>
          Disfruto combinar <b>creatividad</b> y <b>desarrollo</b> para crear
          experiencias modernas, suaves e intuitivas para el usuario.
        </SectionBody>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 max-w-273.75 gap-m pt-12'>
        {aboutCardsData.map((card, index) => {
          return (
            <AboutCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              link={card.link}
              linkContent={card.linkContent}
              hasDownloadableLink={card.hasDownloadableLink}
            />
          );
        })}
      </div>
    </section>
  );
}
