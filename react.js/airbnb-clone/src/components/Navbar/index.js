import React from "react";
import Logo from '../../images/logo512.png'
import './index.css'

const Navbar = () => {
  return (
    <nav className="navigation-menu">
        <img
            src={Logo}
            alt="React Logo"
            width="40px"
            className="nav--icon"/>
      <h2 className="title">
        React Web
      </h2>
      <ul className="navigation-items">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/content">Content</a>
        </li>
        <li>
          <a href="/app">App</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
