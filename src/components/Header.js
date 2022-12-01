import React from "react";
import logo from "../images/Logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" className="header--image" />
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
