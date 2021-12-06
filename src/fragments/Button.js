import React from "react";
import "../styles/Button.css";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ smallBorder, small, text }) => {
  if (small) {
    return <button className="btn-small">{text}</button>;
  }
  if (smallBorder) {
    return <button className="btn-small-border">{text}</button>;
  }
  return (
    <button className="btn">
      <span>{text}</span>
      <FaArrowRight className="icon" />
    </button>
  );
};

export default Button;
