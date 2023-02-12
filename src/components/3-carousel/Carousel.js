import React from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.scss";
import resim from "./img.json";
const CarouselBar = () => {
  return (
    <Carousel className="text-center slayt container-fluid">
      {resim.map((img) => (
        <Carousel.Item interval={3000}>
          <img
            className="d-block"
            src={require(`./img/${img.image}`)}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>{img.baslik}</h3> */}
            <p>{img.baslik}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}

      {/*  <Carousel.Item interval={3000}>
        <img
          className="d-block "
          src={require("./img/1.jpg")}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src="https://media.istockphoto.com/id/1258166024/tr/foto%C4%9Fraf/fisher-boat-on-egirdir-lake-and-sleeping-beauty-mount-in-background.jpg?b=1&s=612x612&w=0&k=20&c=-kitMfqgl6B7cmfpI9aHkXLmTYCYQFialxnYesFQ_AU="
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default CarouselBar;
