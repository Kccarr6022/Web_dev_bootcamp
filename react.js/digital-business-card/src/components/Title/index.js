import React from "react";
import Portrait from "./../../images/portrait.png";
import { ReactComponent as Linkedin } from "./svg/linkedin.svg";
import "./index.css";

function Title() {
  return (
    <div id="title">
      <img src={Portrait} className="portrait" />
      <h1 className="name">Kaden Carr</h1>
      <h3 className="title">Front End Developer</h3>
      <p className="site">kadencarr.website</p>
      <ul className="buttons">
        <button className="email">Email</button>
        <button className="linked-in">
          <ul className="linkedin-content">
            <li>
              <Linkedin className="linkedin-icon" width="20px" fill="#ffff" />
            </li>
            <li>Linkedin</li>
          </ul>
        </button>
      </ul>
    </div>
  );
}

export default Title;
