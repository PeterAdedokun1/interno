import React from "react";
import Logo from "../images/Logo.png";
import { footerLinks } from "../data";

import { Link } from "react-router-dom";
import { ImFacebook, ImTwitter, ImLinkedin } from "react-icons/im";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container1">
          <div className="footer-logo">
            <img src={Logo} alt="" />
            <h3>Interno</h3>
          </div>
          <p>
            It is a lond establish fact that a reader <br /> will be distracted
            lookings
          </p>
          <div className="social-links">
            <ImFacebook className="social-link" />
            <ImTwitter className="social-link" />
            <a
              href="https://www.linkedin.com/in/peter-adedokun-111966231/"
              target="_blank"
            >
              <ImLinkedin className="social-link" />
            </a>

            <SiInstagram className="social-link" />
          </div>
        </div>
        <div className="footer-container2">
          <h3>Pages</h3>
          {footerLinks.map((link) => {
            const { id, url, text } = link;

            return (
              <li key={id}>
                <Link to={url} className="pages">
                  {text}
                </Link>
              </li>
            );
          })}
        </div>
        <div className="footer-container3">
          <h3>Services</h3>
          <li>
            <a href="#">Kitchen</a>
          </li>
          <li>
            <a href="#">Living Area</a>
          </li>
          <li>
            <a href="#">Bathroom</a>
          </li>
          <li>
            <a href="#">Dinner Hall</a>
          </li>
          <li>
            <a href="#">Bedroom</a>
          </li>
        </div>
        <div className="footer-container4">
          <h3>Contact</h3>
          <p>
            55 East Birchwood Ave. Brooklyn, New York
            <br />
            <br />
            11201 contact@interno.com
            <br />
            <br />
            (234) 456 - 7890
          </p>
        </div>
      </footer>
      <br />
      <br />
      <br />

      <hr />
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#4D5053",
        }}
      >
        <br />
        <p>
          Copyright © Interno | Developed by{" "}
          <a href="mailto: adedokunpeter11@gmail.com" target="_blank">
            Adedokun peter
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
