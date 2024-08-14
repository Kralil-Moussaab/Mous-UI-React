import React from "react";
import { Link } from "react-router-dom";
import "./style/Home.css";
import logo from "./image/logo.png";
export default function Home() {
  return (
    <div className="main_home">
      <img src={logo} className="logo" alt="cir" />
      <div className="main_text">
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <div className="mains_button">
          <button class="main-button">
            Get started
            <Link to="/main" className="get_started">
              <div class="get_start_icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </Link>
          </button>
        </div>
      </div>
      <div class="home_area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
