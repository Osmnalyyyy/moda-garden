import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./navbar.scss";
import gif from "./koyu kahve modern kahve dükkanı logosu.gif";
const Navbar = () => {
  return (
    <Container fluid className="navbar">
      <ul className="menu">
        <li>Anasayfa</li>
        <li>Menu</li>
        <li>
          <img src={gif} alt="" className="gif" />
        </li>
        <li>Hakkımızda</li>
        <li>İletişim</li>
      </ul>
    </Container>
  );
};

export default Navbar;
