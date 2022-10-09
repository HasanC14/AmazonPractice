import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link href="">Order</Link>
        <Link href="">Order Review</Link>
        <Link href="">Manage Inventory</Link>
      </div>
    </nav>
  );
};

export default Header;
