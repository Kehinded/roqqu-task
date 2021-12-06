import React from "react";
import "../styles/TextTitle.css";

const TextTitle = ({ text, heading }) => {
  return (
    <>
      <p className="text">{text}</p>
      <p className="heading">{heading}</p>
    </>
  );
};

export default TextTitle;
