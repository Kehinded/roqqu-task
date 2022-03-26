import React from "react";
import "../styles/Button.css";
import { FaArrowRight } from "react-icons/fa";
import {useHistory} from "react-router-dom"

const Button = ({ smallBorder, small, text, backBtn }) => {
  const history = useHistory()
  if (backBtn) {
    return <button onClick={() => history.goBack()} className="btn-small">{text}</button>;
  }
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
