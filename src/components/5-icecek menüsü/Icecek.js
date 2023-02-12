import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./icecek.scss";
import soguk from "./sogukicecek.json";
import sicak from "./sicakicecek.json";
const Icecek = () => {
  return (
    <Container fluid className="icecek ">
      <h2>İçecek menümüze hoşgeldiniz</h2>

      <Row>
        <Col className="col-6 s">
          <h3>Sıcak içecek menüsü</h3>
          <Row>
            {sicak.map((item) => (
              <Col className="col-5 mt-2 mr-1 saka">{item}</Col>
            ))}
          </Row>
        </Col>
        <Col className="col-6 s">
          <h3>Soğuk içecek menüsü</h3>
          <Row>
            {soguk.map((item) => (
              <Col className="col-5 mt-2 mr-1 saka">{item}</Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Icecek;
