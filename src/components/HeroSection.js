import React from "react";
import "../styles/HeroSection.css";
import HeroImg from "../assets/header-home.png";
import Button from "../fragments/Button";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="box-1">
        <div className="content-box">
          <p className="text-one">ROQQU EXCHANGE</p>
          <p className="heading-one">A secure crypto exchange</p>
          <p className="heading-two">built for everyone</p>
          <p className="text-two-a">
            With an easy-to-use interface, we provide industry-leading
          </p>
          <p className="text-two-b">security and deep liquidity</p>
          <Button text="Open Exchange" />
        </div>
      </div>
      {/* end of text box */}
      <div className="box-2">
        <figure className="img-box">
          <img src={HeroImg} alt="" className="img" />
        </figure>
      </div>
      {/* box two end */}
    </div>
  );
};

export default HeroSection;
