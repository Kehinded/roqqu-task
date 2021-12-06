import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../fragments/Button";
import "../styles/NavList.css";

const Navigation = () => {
  return (
    <>
      <FaBars className="nav-menu" />
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="nav-link" to="">
            fees
          </Link>{" "}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="">
            learn
          </Link>{" "}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="">
            blog
          </Link>{" "}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="">
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
