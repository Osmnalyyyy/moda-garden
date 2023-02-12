import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GrLocation } from "react-icons/gr";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <GrLocation />
          Cami Mah Derya Sok 12/A 32500 Eğirdir/Isparta Türkiye
        </li>
        <li>Çalışma Saatleri: 09:00-01:00</li>
      </ul>
    </div>
  );
};

export default Footer;
