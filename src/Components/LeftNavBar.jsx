import React from "react";
import "./style/LeftNavBar.css";
import logo from "./image/logo.png";
import { Link } from "react-router-dom";

const LeftNavBar = ({ onNavClick }) => {
  return (
    <>
      {/* <input type="checkbox" id="toggler" /> */}
      <aside className="aside-wrapper">
        <h1 className="logo-text">
          <img src={logo} alt="logo" />
          <label htmlFor="toggler">
            <i className="fas fa-bars sidebar-toggle" />
          </label>
        </h1>
        <ul>
          <Link onClick={() => onNavClick("input")} className="li">
            Input
          </Link>
          <Link onClick={() => onNavClick("button")} className="li">
            Button
          </Link>
          <Link onClick={() => onNavClick("select")} className="li">
            Select Option
          </Link>
        </ul>
      </aside>
    </>
  );
};
export default LeftNavBar;
