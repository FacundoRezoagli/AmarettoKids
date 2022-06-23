import React, { useState } from "react";
import { Cart } from "../Cart/Cart";
import "./NavBar.css";

const Navbar = ({numero}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Amaretto Kids</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/niños">Niños</a>
        <a href="/niñas">Niñas</a>
        <a href="/about">Acerca de nosotros</a>

      </div>
      <Cart numero = {numero}/>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;