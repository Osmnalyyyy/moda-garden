import React from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.scss";
const CarouselBar = () => {
  return (
    <Carousel className="text-center">
      <Carousel.Item interval={3000}>
        <img
          className="d-block"
          src="https://media.istockphoto.com/id/1275783703/tr/foto%C4%9Fraf/egirdir-kasabas%C4%B1-ve-g%C3%B6l%C3%BC.jpg?b=1&s=612x612&w=0&k=20&c=AHmhgQx-KEMSGEjCITbED5pKGJxuZA6wIg7hP84JOe4="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block "
          src="https://media.istockphoto.com/id/1403842742/tr/foto%C4%9Fraf/the-historic-part-of-e%C4%9Firdir-and-the-mountains-in-the-background-in-the-isparta-region.jpg?b=1&s=612x612&w=0&k=20&c=DNVw0vRD4JXwKmuHQTjPfH6pYmb3CsCojrlkCoULT6E="
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
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBar;
