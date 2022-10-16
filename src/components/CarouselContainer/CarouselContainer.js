import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselContainer from "./CarouselContainer.css";
export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel autoPlay>
        <div className="carousel-item">
          <img src="img001.jpg" />
          <h3>Name: Samantha</h3>
          <h4>Review: </h4>
           <p>
            Very pleasant atmosphere, especially considering<br/>
            the difficult times we are all <br/>
            facing with the current pandemic. Extremely
            <br/> clean area! Greeted very warmly upon my entrance
            <br/> and seated almost immediately
          </p> 
        </div>
        <div className="carousel-item">
          <img src="img002.jpg" />
          <h3>Name: Yvvone</h3>
          <h4>Review: </h4>
          <p>
            Absolutely cannot recommend this salon enough,
            <br /> every time I go I get consistent, quality service.
            <br />
            Pricing is more than reasonable.
          </p> 
        </div>
        <div className="carousel-item">
          <img src="img003.jpg" />
          <h3>Name: Hemali</h3>
          <h4>Review: </h4>
          <p>
            Great haircuts, fantastic services, love the atmosphere,
            <br /> nothing but a good afternoon. 💇‍♀️💆‍♀️
          </p> 
        </div>
        <div className="carousel-item">
          <img src="img004.jpg" />
          <h3>Name: Sharon</h3>
          <h4>Review: </h4>
          <p>
            I have been getting facials here once a <br />
            month since this salon opened. (BN) is wonderful!
            <br />
            The whole experience is so relaxing…I have fallen 😴! Love coming
            here!
          </p>
        </div>
        <div className="carousel-item">
          <img src="img005.jpg" />
          <h3> Name: Collete</h3>
          <h4>Review: </h4>
          <p>
            This is the only salon that <br /> I trust to properly deal with my
            hair.
            <br /> Their extensive knowledge and skill are truly unmatched.
          </p> 
        </div>
      </Carousel>
    </div>
  );
}
