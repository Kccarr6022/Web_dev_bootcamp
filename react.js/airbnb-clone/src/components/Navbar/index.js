import React from "react";
import "./index.css";
import logo from "./../../images/airbnb-logo.png";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <img src={logo} className="nav-logo"></img>
    </nav>
  );
};

export default Navbar;
