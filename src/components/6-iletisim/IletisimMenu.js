import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import Harita from "./Harita";
import YorumYap from "./YorumYap";

const Iletisim = () => {
  return (
    <Container fluid className="my-5">
      <Row>
        <Col className="col-8 h-100">
          <Harita />
        </Col>
        <Col className="col-4 h-100">
          <YorumYap />
        </Col>
      </Row>
    </Container>
  );
};

export default Iletisim;
