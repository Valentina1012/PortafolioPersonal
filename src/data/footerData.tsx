import { aboutCardsData } from './aboutCards';

export const footerData = aboutCardsData.filter(
  (d) => d.title == 'Github' || d.title == 'Curriculum' || d.title == 'LinkedIn'
);
