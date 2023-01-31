import React from "react";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="menu">
        <li>
          <a href="">Anasayfa</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>

        <ul className="moda">Moda Garden Cafe & Bistro</ul>
        <ul>
          <li>
            <a href="">Hakkımızda</a>
          </li>
          <li>
            <a href="">İletişim</a>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Navbar;
