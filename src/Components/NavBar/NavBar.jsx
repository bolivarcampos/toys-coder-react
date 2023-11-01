import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export const NavBar = () => {
  return (
    <div className="navbox">
      <div className="leftside">
        <img src={logo} alt="logo" />
      </div>
      <div className="rightside">
        <Link to="/signup" className="navlinks">
          SIGN UP
        </Link>
        <Link to="/signup" className="navlinks">
          LOGIN
        </Link>
      </div>
    </div>
  );
};
