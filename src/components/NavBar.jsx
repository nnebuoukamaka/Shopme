import React from "react";
import callIcon from "../assets/navbarImages/callIcon.svg";
import messageIcon from "../assets/navbarImages/messageIcon.svg";
import instagramIcon from "../assets/navbarImages/instagramIcon.svg";
import youtubeIconIcon from "../assets/navbarImages/youtubeIcon.svg";
import facebookIcon from "../assets/navbarImages/facebookIcon.svg";
import xIcon from "../assets/navbarImages/xIcon.svg";
import dropdownIcon from "../assets/navbarImages/dropdownIcon.svg";
import loginIcon from "../assets/navbarImages/loginIcon.svg";
import cartIcon from "../assets/navbarImages/cartIcon.svg";
import searchIcon from "../assets/navbarImages/searchIcon.svg";
import likeIcon from "../assets/navbarImages/likeIcon.svg";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <header className="header">
      <nav>
        <div className="upper-navbar">
          <ul className="uppernavbar-list1">
            <li style={{ display: "flex" }}>
              <img src={callIcon} alt="call" />
              <span style={{ marginLeft: "5px" }}>(225) 555-0118 </span>
            </li>
            <li style={{ display: "flex" }}>
              <img src={messageIcon} alt="email" />
              <span style={{ marginLeft: "5px" }}>
                michelle.rivera@gmail.com
              </span>
            </li>
          </ul>
          <div>
            <h6>Follow Us and get a chance to win 80% off</h6>
          </div>
          <ul className="uppernavbar-list2">
            <li>
              <h6> Follow Us :</h6>
            </li>
            <li>
              <img src={instagramIcon} alt="Instagram" />
            </li>
            <li>
              <img src={youtubeIconIcon} alt="Youtube" />
            </li>
            <li>
              <img src={facebookIcon} alt="Facebook" />
            </li>
            <li>
              <img src={xIcon} alt="X" />
            </li>
          </ul>
        </div>
        <div className="lower-navbar">
          <h3>Bandage</h3>

          <ul className="lower-navbar-list1">
            <li>Home</li>
            <li>
              Shop
              <img src={dropdownIcon} style={{ marginLeft: "8px" }} />
            </li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Pages</li>
          </ul>
          <ul className="lower-navbar-list2">
            <li>
              <img src={loginIcon} style={{ marginRight: "5px" }} />
              Login / Register
            </li>
            <li>
              <img src={searchIcon} />
            </li>
            <li style={{ display: "flex", columnGap: "3px" }}>
              <img src={cartIcon} />
              <span>1</span>
            </li>
            <li style={{ display: "flex", columnGap: "3px" }}>
              <img src={likeIcon} />
              <span>1</span>
            </li>
          </ul>
          <div></div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
