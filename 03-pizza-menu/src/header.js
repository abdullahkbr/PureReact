import React, { useState } from "react";
import logo from "./Logo.svg";
import openIcon from "./open.svg";
import closeIcon from "./close.svg";
import cartIcon from "./cart.svg";
import "./css/header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="brand-info">
        <a href="./home">
          <img src={logo} className="logo" alt="Logo" />
        </a>

        <button className="hamburger open" onClick={toggleMenu}>
          <img src={openIcon} alt="Toggle Menu" />
        </button>
      </div>

      <nav className={`navbar ${isOpen ? "is-active" : ""}`}>
        <a href="./home">Home</a>
        <a href="./menu">Menu</a>
        <a href="./contact">Contact</a>
        <a href="./about">About</a>

        <button className="close-btn hamburger" onClick={toggleMenu}>
          <img src={closeIcon} alt="Close Menu" />
        </button>
      </nav>

      <div className="header__cta">
        <button className="btn btn--primary">+86 852 346 000</button>
        <button className="btn btn--secondary">Reservations</button>
      </div>

      <button className="cart">
        <img src={cartIcon} alt="Cart" />
      </button>
    </header>
  );
}

export default Header;
