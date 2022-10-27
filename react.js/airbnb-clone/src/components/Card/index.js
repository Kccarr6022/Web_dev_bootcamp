import React from "react";
import "./index.css";
import image from "./../../images/image1.png";

const Card = (props) => {
  return (
    <div className="card">
      <img src={image} className="card-image" width="50px"></img>
      <div className="text">
        <h2> We have created a card {props.test}</h2>
      </div>
    </div>
  );
};

export default Card;
//