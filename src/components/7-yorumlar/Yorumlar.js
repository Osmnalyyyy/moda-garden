import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Yorum from "./Yorum";
import yorumlar from "./yorum.json";
import "./yorum.scss";
const Yorumlar = () => {
  return (
    <Container className="text-center">
      <Row className="m-0">
        <Col className="col-4 yorum">
          <Yorum />
        </Col>
        <Col className="col-4 yorum">
          <Yorum />
        </Col>
        <Col className="col-4 yorum">
          <Yorum />
        </Col>
      </Row>
    </Container>
  );
};

export default Yorumlar;
