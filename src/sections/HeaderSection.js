import React from "react";
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";
import DefaultLogo from "../fragments/DefaultLogo";
import "../styles/HeaderSection.css"

const HeaderSection = () => {
  return (
    <div className="header-section">
      <div className="navigation-box">
        <div className="logo-box">
          <DefaultLogo />
        </div>
        {/* end of logo box */}
        <div className="info-box">
          <span>BTC/NGN</span>
          <span>₦28,989,003</span>
          <span></span>
        </div>
        {/* end of info-box */}
        <div className="nav-list-box">
          <Navigation />
        </div>
        {/* end of nav list box */}
      </div>
      {/* navigation box end */}
      <div className="hero-section-box">
        <HeroSection />
      </div>
      {/* end of hero section */}
    </div>
  );
};

export default HeaderSection;
