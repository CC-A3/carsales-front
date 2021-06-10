import { Carousel } from '3d-react-carousal';
import car1 from './assets/car1.png';
import car2 from './assets/car2.png';

const CarCarousel = () => {

  let slides = [
    <img  src={car1} alt="1" />,
    <img  src={car2} alt="2" /> ];
  
  return (
    <>
      <Carousel slides={slides} autoplay={true} interval={10000} />
    </>
  )
}

export default CarCarousel;


