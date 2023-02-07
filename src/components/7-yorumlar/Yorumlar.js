import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Yorum from "./Yorum";
import yorumlar from "./yorum.json";
import "./yorum.scss";
const Yorumlar = () => {
  return (
    <Container className="text-center">
      <Row className="m-0  yorum-grup">
        {yorumlar.map((yorum) => (
          <Col className="col-3 yorum">
            <Yorum {...yorum} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Yorumlar;
