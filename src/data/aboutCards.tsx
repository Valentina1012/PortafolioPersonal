import MapPin from '../assets/icons/MapPin.svg?react';
import Github from '../assets/icons/GithubLogo.svg?react';
import Envelope from '../assets/icons/Envelope.svg?react';
import ReadCv from '../assets/icons/ReadCvLogo.svg?react';
import Linkedin from '../assets/icons/LinkedinLogo.svg?react';
import GraduationCap from '../assets/icons/GraduationCap.svg?react';

export const aboutCardsData = [
  {
    icon: <Linkedin />,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/valentina-alvarez-coelho-00776532b/',
    linkContent: 'linkedin.com/in/valentina-alvarez-coelho',
  },
  {
    icon: <Github />,
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
    icon: <ReadCv />,
    title: 'Curriculum',
    link: '/CV.pdf',
    linkContent: 'CV-Valentina-Alvarez-Coelho.pdf',
    hasDownloadableLink: true,
  },
];
