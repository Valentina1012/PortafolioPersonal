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

export const slides = [
  {
    num: 1,
    name: 'Proyecto 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt ut elit a convallis. Nam eget consectetur nunc. Aenean venenatis viverra nulla, varius euismod purus dapibus ac. Vivamus facilisis diam ac sem faucibus, sed imperdiet ligula hendrerit. Vivamus facilisis aliquam luctus.',
    img: project1,
    imgsSecondary: [project1, project1],
    linkDeploy: '',
    linkRepository: '',
    techs: [
      { name: 'React', icon: <ReactLogoSmall /> },
      { name: 'TypeScript', icon: <TypeScriptLogoSmall /> },
      { name: 'TailwindCSS', icon: <TailwindCSSLogoSmall /> },
    ],
  },
  {
    num: 2,
    name: 'Proyecto 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt ut elit a convallis. Nam eget consectetur nunc. Aenean venenatis viverra nulla, varius euismod purus dapibus ac. Vivamus facilisis diam ac sem faucibus, sed imperdiet ligula hendrerit. Vivamus facilisis aliquam luctus.',
    img: project2,
    imgsSecondary: [project2, project2],
    linkDeploy: '',
    linkRepository: '',
    techs: [
      { name: 'React', icon: <ReactLogoSmall /> },
      { name: 'TypeScript', icon: <TypeScriptLogoSmall /> },
      { name: 'SASS', icon: <SassLogoSmall /> },
    ],
  },
  {
    num: 3,
    name: 'Proyecto 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt ut elit a convallis. Nam eget consectetur nunc. Aenean venenatis viverra nulla, varius euismod purus dapibus ac. Vivamus facilisis diam ac sem faucibus, sed imperdiet ligula hendrerit. Vivamus facilisis aliquam luctus.',
    img: project3,
    imgsSecondary: [project3, project3],
    linkDeploy: '',
    linkRepository: '',
    techs: [
      { name: 'React', icon: <ReactLogoSmall /> },
      { name: 'TailwindCSS', icon: <TailwindCSSLogoSmall /> },
    ],
  },
  {
    num: 4,
    name: 'Proyecto 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt ut elit a convallis. Nam eget consectetur nunc. Aenean venenatis viverra nulla, varius euismod purus dapibus ac. Vivamus facilisis diam ac sem faucibus, sed imperdiet ligula hendrerit. Vivamus facilisis aliquam luctus.',
    img: project4,
    imgsSecondary: [project4, project4],
    linkDeploy: '',
    linkRepository: '',
    techs: [
      { name: 'React', icon: <ReactLogoSmall /> },
      { name: 'CSSModules', icon: <CSSLogoSmall /> },
    ],
  },
];
