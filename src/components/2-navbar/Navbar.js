import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./navbar.scss";
import gif from "./koyu kahve modern kahve dükkanı logosu.gif";
const Navbar = () => {
  return (
    <>
      <Container fluid className="navbar">
        <ul className="menu">
          <li>
            <a href="">Anasayfa</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <a href="">Yorumlar</a>
          </li>
          <li>
            <a href="">İletişim</a>
          </li>
        </ul>
      </Container>
      <Container className="menu2">
        <ul>
          <li className="gif">
            <img src={gif} />
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Navbar;
