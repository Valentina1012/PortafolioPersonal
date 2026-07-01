import {
  MapPin,
  GithubLogo,
  Envelope,
  ReadCvLogo,
  LinkedinLogo,
  GraduationCap,
} from '../assets/icons';

export const aboutCardsData = [
  {
    icon: <LinkedinLogo />,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/valentina-alvarez-coelho-00776532b/',
    linkContent: 'linkedin.com/in/valentina-alvarez-coelho',
  },
  {
    icon: <GithubLogo />,
    title: 'Github',
    link: 'https://github.com/Valentina1012',
    linkContent: 'github.com/Valentina1012',
  },
  {
    icon: <Envelope />,
    title: 'Gmail',
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=alvarezcoelhovalentina@gmail.com&su=Contacto%20desde%20Portfolio',
    linkContent: 'alvarezcoelhovalentina@gmail.com',
  },
  {
    icon: <GraduationCap />,
    title: 'Estudios',
    description: 'Universidad de Hurlingham - Tecnicatura en Programación',
    link: 'https://unahur.edu.ar/',
  },
  {
    icon: <MapPin />,
    title: 'Ubicación',
    description: 'Hurlingham, Buenos Aires',
    link: 'https://maps.app.goo.gl/PJ7zcCkXCEs7XNBr6',
  },
  {
    icon: <ReadCvLogo />,
    title: 'Curriculum',
    link: '/CV.pdf',
    linkContent: 'CV-Valentina-Alvarez-Coelho.pdf',
    hasDownloadableLink: true,
  },
];
