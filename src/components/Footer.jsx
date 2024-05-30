import React, { useState } from "react";
import facebookIcon from "../assets/footerImages/facebookIcon.svg";
import instagramIcon from "../assets/footerImages/instagramIcon.svg";
import xIcon from "../assets/footerImages/XIcon.svg";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
function Footer() {
  const [buttonAlert, setButtonAlert] = useState(false);
  const buttonclick = () => {
    setButtonAlert(!buttonAlert);
  };
  return (
    <div>
      <footer className="footer">
        <div className="upper-footer">
          <h3>Bandage</h3>
          <ul className="upper-footer-list">
            <li>
              <img src={facebookIcon} alt="Facebook" />
            </li>
            <li>
              <img src={instagramIcon} alt="Instagram" />
            </li>
            <li>
              <img src={xIcon} alt="X" />
            </li>
          </ul>
        </div>
        <div className="lower-footer">
          <div className="lower-footer-column1">
            <h5>Company Info</h5>
            <ul>
              <li>
                <Link to="/" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  Carrier
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  We are hiring
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="lower-footer-column2">
            <h5>Legal</h5>
            <ul>
              <li>
                <Link to="/" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  Carrier
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  We are hiring
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="lower-footer-column3">
            <h5>Features</h5>
            <ul>
              <li>
                <Link to="/" className="footer-link">
                  Business Marketing
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  User Analytic
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  Live Chat
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  Unlimited Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="lower-footer-column4">
            <h5>Resources</h5>
            <ul>
              <li>
                <Link to="/" className="footer-link">
                  IOS and Android
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  Watch And Demo
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  Customers
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div className="lower-footer-column5">
            <h5>Get In Touch</h5>
            <ul>
              <li>
                <form>
                  <input
                    type="text"
                    className="input"
                    placeholder="Your Email"
                    disabled
                  />
                  <button className="btn" type="button" onClick={buttonclick}>
                    Subscribe
                  </button>
                  {buttonAlert && <span>Feature not Available</span>}
                </form>
              </li>
            </ul>
          </div>
        </div>
        <div className="lower-footer-2">
          <h6>Made With Love By Finland All Rights Reserved</h6>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
