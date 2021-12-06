import React , {useContext} from "react";
import { FaBars } from "react-icons/fa";
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";
import DefaultLogo from "../fragments/DefaultLogo";
import "../styles/HeaderSection.css"
import SidebarContext from "../store/SidebarContext";

const HeaderSection = () => {
  const sidebarCtx = useContext(SidebarContext)
  return (
    <div
      className="header-section"
      // onClick={() => sidebarCtx.showsidebarFunc("close")}
    >
      <div className="navigation-box">
        <div className="logo-box">
          <DefaultLogo />
        </div>
        {/* end of logo box */}
        {/* <div className="info-box">
          <span>BTC/NGN</span>
          <span>₦28,989,003</span>
          <span></span>
        </div> */}
        {/* end of info-box */}
        <div className="nav-list-box">
          <FaBars
            className="nav-menu"
            onClick={() => sidebarCtx.showsidebarFunc("any")}
          />
          <Navigation />
        </div>
        {/* end of nav list box */}
      </div>
      {/* navigation box end */}
      <div
        className="hero-section-box"
        // onClick={() => sidebarCtx.showsidebarFunc("close")}
      >
        <HeroSection />
      </div>
      {/* end of hero section */}
    </div>
  );
};

export default HeaderSection;
