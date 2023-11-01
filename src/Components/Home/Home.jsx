import React from "react";
import "../Css/Home.css";
import { NavBar } from "../NavBar/NavBar";
import { Products } from "../Products/Products";

export const Home = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <Products />
    </div>
  );
};
