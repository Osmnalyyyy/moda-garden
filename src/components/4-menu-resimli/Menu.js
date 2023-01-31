import React from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import "./menu.scss";
import resim from "./koyu kahve modern kahve dükkanı logosu.gif";
const Menu = () => {
  return (
    <Container className="text-center mt-5 mb-5">
      <h1>Moda Cafeye Hoşgeldiniz</h1>
      <img src={resim} alt="" />
      <div className="row mt-5">
        <Card className="col-3 menucard">
          <Card.Img
            className="h-50"
            variant="top"
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Card.Body>
            <Card.Title>Pankek</Card.Title>
            <Card.Text>Afiyet Olsun</Card.Text>
            <Card.Text>35₺</Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-3  menucard">
          <Card.Img
            className="h-50"
            variant="top"
            src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Card.Body>
            <Card.Title>Salata</Card.Title>
            <Card.Text>Afiyet olsun</Card.Text>
            <Card.Text>35₺</Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-3  menucard">
          <Card.Img
            className="h-50"
            variant="top"
            src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Card.Body>
            <Card.Title>Makarna</Card.Title>
            <Card.Text>Afiyet olsun</Card.Text>
            <Card.Text>25₺</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Menu;
