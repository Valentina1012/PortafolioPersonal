import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProjectDisplay } from '../components';
import project1 from '../assets/imgs/project1.png';
import project2 from '../assets/imgs/project2.png';
import project3 from '../assets/imgs/project3.png';
import project4 from '../assets/imgs/project4.png';
import {
  ReactLogoSmall,
  TypeScriptLogoSmall,
  TailwindCSSLogoSmall,
  SassLogoSmall,
  CSSLogoSmall,
} from '../assets/logos';

const meta = {
  title: 'Example/ProjectDisplay',
  component: ProjectDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Default: Story = {
  render: (args) => <ProjectDisplay {...args} />,
  args: {
    slides: [
      {
        num: 1,
        name: 'Proyecto 1',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        img: project1,
        imgsSecondary: [project1, project1],
        linkDeploy: 'https://example.com/',
        linkRepository: 'https://example.com/',
        techs: [
          { name: 'React', icon: <ReactLogoSmall /> },
          { name: 'TypeScript', icon: <TypeScriptLogoSmall /> },
          { name: 'TailwindCSS', icon: <TailwindCSSLogoSmall /> },
        ],
      },
      {
        num: 2,
        name: 'Proyecto 2',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        img: project2,
        imgsSecondary: [project2, project2],
        linkDeploy: 'https://example.com/',
        linkRepository: 'https://example.com/',
        techs: [
          { name: 'React', icon: <ReactLogoSmall /> },
          { name: 'TypeScript', icon: <TypeScriptLogoSmall /> },
          { name: 'SASS', icon: <SassLogoSmall /> },
        ],
      },
      {
        num: 3,
        name: 'Proyecto 3',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        img: project3,
        imgsSecondary: [project3, project3],
        linkDeploy: 'https://example.com/',
        linkRepository: 'https://example.com/',
        techs: [
          { name: 'React', icon: <ReactLogoSmall /> },
          { name: 'TailwindCSS', icon: <TailwindCSSLogoSmall /> },
        ],
      },
      {
        num: 4,
        name: 'Proyecto 4',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        img: project4,
        imgsSecondary: [project4, project4],
        linkDeploy: 'https://example.com/',
        linkRepository: 'https://example.com/',
        techs: [
          { name: 'React', icon: <ReactLogoSmall /> },
          { name: 'CSSModules', icon: <CSSLogoSmall /> },
        ],
      },
    ],
    actualSlide: {
      num: 1,
      name: 'Proyecto 1',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      img: project1,
      imgsSecondary: [project1, project1],
      linkDeploy: 'https://example.com/',
      linkRepository: 'https://example.com/',
      techs: [
        { name: 'React', icon: <ReactLogoSmall /> },
        { name: 'TypeScript', icon: <TypeScriptLogoSmall /> },
        { name: 'TailwindCSS', icon: <TailwindCSSLogoSmall /> },
      ],
    },
    slideDirection: null,
    onChangeSlide: () => {},
  },
};
