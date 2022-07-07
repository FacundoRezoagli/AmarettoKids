import React, { useState } from "react";
import { Cart } from "../Cart/Cart";
import "./NavBar.css";
import { Link } from "react-router-dom";

const Navbar = ({numero}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Amaretto Kids</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/home">Home</Link>
        {/* <Link to="/category/niños">Niños</Link>
        <Link to="/category/niñas">Niñas</Link> */}
        <Link to="/about">Acerca de nosotros</Link>

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