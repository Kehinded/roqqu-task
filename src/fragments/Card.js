import React from "react";
import "../styles/Card.css";

const Card = ({ text, title }) => {
  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="text">{text}</p>
    </div>
  );
};

export default Card;
