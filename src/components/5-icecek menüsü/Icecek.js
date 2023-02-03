import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./icecek.scss";
import soguk from "./sogukicecek.json";
import sicak from "./sicakicecek.json";
const Icecek = () => {
  return (
    <Container className="icecek">
      <h2>İçecek menümüze hoşgeldiniz</h2>

      <Row className="s">
        <h3>Sıcak içecek menüsü</h3>
        {sicak.map((item) => (
          <Col className="col-3 mt-2 saka">{item}</Col>
        ))}
      </Row>

      <Row className="s">
        <h3>Soğuk içecek menüsü</h3>
        {soguk.map((item) => (
          <Col
            className="col-3 mt-2 saka"
            //  style={{ border: "2px dotted red", margim: "1rem" }}
          >
            {item}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Icecek;
