import React from "react";
import "../styles/TextTitle.css";

const TextTitle = ({ text, heading, second }) => {

  if(second){

  return (
    <>
      <p className="text">{text}</p>
      <h1 className="heading">{heading}</h1>
    </>
  );
  }

  return (
    <>
      <p className="text">{text}</p>
      <p className="heading">{heading}</p>
    </>
  );
};

export default TextTitle;
