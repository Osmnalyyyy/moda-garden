import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GrLocation } from "react-icons/gr";
import "./footer.scss";
const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col>
          <GrLocation />
          Cami Mah Derya Sok 12/A 32500 Eğirdir/Isparta Türkiye
        </Col>
        <Col>Çalışma Saatleri: 09:00-01:00</Col>
      </Row>
    </Container>
  );
};

export default Footer;
