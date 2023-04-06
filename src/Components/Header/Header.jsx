import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import Shop from './../Shop/Shop';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div><img src={logo} alt="" /></div>

      <div className="menu">
        <Link to="/">Shop</Link>
        <Link to="/orders">order</Link>
        <Link to="/order-review">order review</Link>
        <Link to="/Manage Inventory">Manage Inventory</Link>
        <Link to="/Login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
