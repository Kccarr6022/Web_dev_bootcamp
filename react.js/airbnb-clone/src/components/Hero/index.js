import React from "react";
import heroimage from "./../../images/hero-image.png";
import "./index.css";

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero-graphic" src={heroimage}></img>
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-content">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </div>
  );
};

export default Hero;
