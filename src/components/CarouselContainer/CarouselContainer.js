import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        <div className="carousel-item">
          <img src="img001.jpg" />
          <h3>Name: Samantha</h3>
        </div>
        <div className="carousel-item">
          <img src="img002.jpg" />
          <h3>Name: Yvvone</h3>
        </div>
        <div className="carousel-item">
          <img src="img003.jpg" />
          <h3>Name: Hemali</h3>
        </div>
        <div className="carousel-item">
          <img src="img004.jpg" />
          <h3>Name: Sharon</h3>
        </div>
        <div className="carousel-item">
          <img src="img005.jpg" />
          <h3> Name: Collete</h3>
        </div>
        <div className="carousel-item">
          <img src="img006.jpg" />
          <h3>Name: Magda</h3>
        </div>
       
      </Carousel>
    </div>
  );
}
