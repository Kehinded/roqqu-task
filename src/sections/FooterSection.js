import React from "react";
import FooterImg from "../assets/roqqu-logo-one.png";
import ListItem from "../fragments/ListItem";
import {
  footeroneDetails,
  footerthreeDetails,
  footertwoDetails,
} from "../store/DefaultValues";
import "../styles/Footer.css";

const FooterSection = () => {
  return (
    <div className="footer-section">
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
