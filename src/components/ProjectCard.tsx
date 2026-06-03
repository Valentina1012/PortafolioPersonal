import { GithubLogo, Globe } from '../assets/icons';
import { IconAnchor, SectionBody, TechTag } from './';
import type { SlideType } from '../types/carouselTypes';

export function ProjectCard({ slide }: { slide: SlideType }) {
  return (
    <div>
      <div className='flex items-center justify-between mb-3'>
        <h3 className='font-impact h6-bold text-neutral-secondary '>{slide.name}</h3>
        <div className='flex gap-s'>
          <IconAnchor icon={<Globe />} link={slide.linkDeploy} />
          <IconAnchor icon={<GithubLogo />} link={slide.linkRepository} />
        </div>
      </div>
      <SectionBody>{slide.description}</SectionBody>
      <div className='flex gap-s mt-6 flex-wrap'>
        {slide.techs.map((tech, index) => (
          <TechTag key={index} name={tech.name} icon={tech.icon}/>
        ))}
      </div>
    </div>
  );
}
