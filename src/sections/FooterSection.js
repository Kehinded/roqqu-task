import React, {useContext} from "react";
import FooterImg from "../assets/roqqu-logo-one.png";
import ListItem from "../fragments/ListItem";
import SidebarContext from "../store/SidebarContext";
import {
  footeroneDetails,
  footerthreeDetails,
  footertwoDetails,
} from "../store/DefaultValues";
import "../styles/Footer.css";

const FooterSection = () => {
  const sidebarCtx = useContext(SidebarContext)
  return (
    <div className="footer-section" onClick={() => sidebarCtx.showsidebarFunc("close")}>
      <div className="box-1">
        <figure className="img-box">
          <img src={FooterImg} alt="" className="img" />
        </figure>
        <p className="text">
          Buy and sell faster using the Roqqu mobile app, available on Google
          playstore. Find us where ever there’s air and internet connection.{" "}
        </p>
        <br />
        <p className="text">hello@roqqu.com</p>
      </div>
      {/* end of box one */}
      <div className="box-2">
        <ListItem list={footeroneDetails} />
        <ListItem list={footertwoDetails} />
        <ListItem list={footerthreeDetails} />
      </div>
    </div>
  );
};

export default FooterSection;
