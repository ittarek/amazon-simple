import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <div><img src={logo} alt="" /></div>

      <div className="menu">
        <a href="/order">order</a>
        <a href="/order-review">order review</a>
        <a href="/Manage Inventory">Manage Inventory</a>
        <a href="/Login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
