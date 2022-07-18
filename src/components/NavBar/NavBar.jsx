import React, { useState } from "react";
import { Cart } from "../Cart/Cart";
import "./NavBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Amaretto</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/home">Home</Link>
        <Link to="/category/gorras">Gorras</Link>
        <Link to="/category/remeras">Remeras</Link> 
        <Link to="/category/camisas">Camisas</Link>
        <Link to="/about">Acerca de nosotros</Link>

      </div>
      <Link to="/cart">
      <Cart/>
      </Link>
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