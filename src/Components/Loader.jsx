import React from "react";
import "./style/Loader.css";
import logo from "./image/favicon.png";
export default function Loader() {
  return (
    <div className="page-preloader">
      <img className="preloader-logo" src={logo} alt="logo" width="170" />
      <div className="preloader-preview-area">
        <div className="ball-pulse">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
