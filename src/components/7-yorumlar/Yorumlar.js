import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Yorum from "./Yorum";
import yorumlar from "./yorum.json";
import "./yorum.scss";
const Yorumlar = () => {
  const [yorumDB, setYorumDB] = useState([]);

  const yorumGetir = async () => {
    const yorum = await axios.get("http://localhost:8090/message");
    setYorumDB(yorum.data);
    console.log(yorumDB);
  };

  useEffect(() => {
    yorumGetir();
  }, [yorumDB]);

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
