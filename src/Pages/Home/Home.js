import React from "react";
import "./Home.css";
import CarouselComponent, { CarouselItem } from "../../components/CarouselContainer/CarouselContainer";

function Home() {
  return (
    <div className="container">
      <div className="container-wrapper">
        <div className="text-container">
          <h3>
            Care of <br /> your body
          </h3>
        </div>
        <div className="image-container">
          <img src="https://as2.ftcdn.net/v2/jpg/01/74/54/43/1000_F_174544330_zNsy0mU3ix2noU0cKKHirBQJQsvmPkOE.jpg" />
        </div>
      </div>
      <hr />
      <div className="welcome-card">
        <img src="https://media.gettyimages.com/vectors/beauty-salon-vector-id1157312237?k=20&m=1157312237&s=612x612&w=0&h=4mPBxaCGDekaJkMT09ArZ1GtacuOL71mGy1WOCNryU4=" />
        <div className="welcome-card-text">
          <h3>Welcome to Suka Salon</h3>
          <p>
            Everybody is looking for places where to get the best beauty
            services. In our salon silence, energy,beauty and vitality meet. The
            treatments we offer with refresh both your looks and soul. We will
            be glad to welcome you and recommend our facilities and services.
          </p>
        </div>
      </div>
      <CarouselComponent/>
    </div>
  );
}

export default Home;
