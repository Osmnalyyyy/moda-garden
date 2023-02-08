import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./topbar.scss";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const Topbar = () => {
  return (
    <>
      <div className="topbar container-fluid">
        <ul className="contact ">
          <li>
            <a href="tel:+905398591183"></a>05398591183
          </li>
          <li>
            <a href="mailto:cafe@gmail.com"></a>cafe@gmail.com
          </li>
        </ul>
        <ul className="icons">
          <li>
            <a href="#"></a>
            <BsInstagram />
          </li>
          <li>
            <a href="#"></a>
            <BsFacebook />
          </li>
          <li>
            <a href="#"></a>
            <BsTwitter />
          </li>
        </ul>
      </div>
      <BsFillArrowUpCircleFill />
    </>
  );
};

export default Topbar;
