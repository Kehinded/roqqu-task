import React from "react";
import "../styles/Button.css"

const Button = ({smallBorder, small, text}) => {
  if(small){
    return(
      <button className="btn-small">{text}</button>
    )
  }
  if(smallBorder){
    return(
      <button className="btn-small-border">{text}</button>
    )
  }
  return (<button className="btn">
{text}
  </button>);
};

export default Button;
