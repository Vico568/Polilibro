import { Carousel } from "react-bootstrap";
import diapositivas from "../js/diapositivas";

function Carrusel({ unidad }) {
  return (
    <Carousel>
      {diapositivas[unidad].map((item) => (
        <Carousel.Item key={item}>
          <img className="d-block w-100" src={item} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrusel;
