import React from "react";
import "./mycarousel.style.css";
import image1 from "../../assets/img/myimg/slide1.jpeg";
import image2 from "../../assets/img/myimg/slide2.jpeg";
import image3 from "../../assets/img/myimg/slide3.jpeg";
import Carousel from "react-bootstrap/Carousel";
import ScrollDown from "../scroll-down/scrolldown.component";

function MyCarousel() {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 custom-img"
            src={image3}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 custom-img"
            src={image1}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={image2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
}

export default MyCarousel;
