import React from "react";
import "../css/Navbar.css";
import { LightLogo } from "../images/light_logo";
function XNavbar() {
  return (
    <div class="navbar">
      <div class="container nav-container">
        <div class="logo">
          <LightLogo />
        </div>
        <input class="checkbox" type="checkbox" name="" id="" />
        {/* <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div> */}
        <div class="hamburger">
          <div></div>
        </div>
        <div class="menu-items">
          <li><a href="#">Home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">blogs</a></li>
          <li><a href="#">portfolio</a></li>
          <li><a href="#">contact</a></li>
        </div>
      </div>
    </div>
  );
}
export default XNavbar;