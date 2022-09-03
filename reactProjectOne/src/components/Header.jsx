import React from "react";
import reactLogo from "../assets/react.svg";
import "../styles/header.css";

const Header = () => {
  return (
    <div>
      <nav className="nav">
        <img src={reactLogo} />
        <h3>React Facts</h3>
        <p className="nav-item">React Course - Project 1</p>
      </nav>
    </div>
  );
};

export default Header;
