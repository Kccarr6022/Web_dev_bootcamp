import React from "react";
import { ReactComponent as Twitter } from "./svg/twitter.svg";
import { ReactComponent as Facebook } from "./svg/facebook.svg";
import { ReactComponent as Instagram } from "./svg/instagram.svg";
import { ReactComponent as Github } from "./svg/github.svg";
import "./index.css";

const Footer = () => {
  return (
    <footer>
      <ul className="links">
        <li>
          <Twitter fill="#918E9B" width="40px" />
        </li>
        <li>
          <Facebook fill="#918E9B" width="80px" />
        </li>
        <li>
          <Instagram fill="#918E9B" width="40px" />
        </li>
        <li>
          <Github fill="#918E9B" width="40px" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
