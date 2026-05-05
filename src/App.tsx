import './App.css';
import Carousel from './components/ProjectDisplay';
import project1 from './assets/imgs/project1.png';
import project2 from './assets/imgs/project2.png';
import project3 from './assets/imgs/project3.png';
import project4 from './assets/imgs/project4.png';

const SLIDES = [
  {
    num: 1,
    name: 'Proyecto 1',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    img: project1,
    imgsSecondary: [project1, project1],
  },
  {
    num: 2,
    name: 'Proyecto 2',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    img: project2,
    imgsSecondary: [project2, project2],
  },
  {
    num: 3,
    name: 'Proyecto 3',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    img: project3,
    imgsSecondary: [project3, project3],
  },
  {
    num: 4,
    name: 'Proyecto 4',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    img: project4,
    imgsSecondary: [project4, project4],
  },
];

function App() {
  return (
    <>
      <Carousel slides={SLIDES} />
    </>
  );
}

export default App;
