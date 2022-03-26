import React, {useContext} from "react";
// import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../fragments/Button";
import "../styles/NavList.css";
import SidebarContext from "../store/SidebarContext";

const Navigation = () => {
  const sidebarCtx = useContext(SidebarContext)
  return (
    <>
      <ul className={`nav-list ${!sidebarCtx.showSideBar && "transform-x"}`}>
        <div className="info-box">
          <span>BTC/NGN</span>
          <span>₦28,989,003</span>
          <span></span>
        </div>
        {/* info-box */}
        <li className="nav-item">
          <Link className="nav-link" to="/fee">
            fees
          </Link>{" "}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/learn">
            learn
          </Link>{" "}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">
            blog
          </Link>{" "}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">
            for business
          </Link>{" "}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="">
            <Button text="log in" smallBorder={true} />
          </Link>{" "}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="">
            <Button text="sign up" small={true} />
          </Link>{" "}
        </li>
      </ul>
    </>
  );
};

export default Navigation;
