import React from "react";
import "../css/Navbar.css";
import { LightLogo } from "../images/light_logo";
import { XTwitter } from "../images/socials/x";
import { Linkedin } from "../images/socials/linkedin";
import { Facebook } from "../images/socials/facebook";
import { Instagram } from "../images/socials/instagram";
import { Github } from "../images/socials/github";

import { Link, Element } from "react-scroll";


function XNavbar() {
  return (
    <div className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <LightLogo />
        </div>
        <input className="checkbox" type="checkbox" name="" id="" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu-items">
          <li><a href="/">Home</a></li>
          <li><a href="/resume">About</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Contact</a></li>
          <div className="montion">
            <div className="socials">
              <a href="#"> <Linkedin /> </a>
              <a href="#"> <XTwitter /> </a>
              <a href="#"> <Instagram /> </a>
              <a href="#"> <Facebook /> </a>
              <a href="#"> <Github /> </a>
            </div>
            <h3>oussamafnh &copy;</h3>
          </div>

        </div>
      </div>
    </div>
  );
}
export default XNavbar;