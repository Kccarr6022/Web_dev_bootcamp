import React from "react";
import heroimage from "./../../images/hero-image.png";
import "./index.css";

const Hero = () => {
  return (
    <div className="hero-content">
      <img className="hero-graphic" src={heroimage}></img>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </div>
  );
};

export default Hero;
