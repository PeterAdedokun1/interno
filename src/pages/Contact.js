import React from "react";
import Background from "../component/Background";
import background from "../images/contact-background.jpg";
import Fade from "react-reveal/Fade";
//icons
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { ImFacebook, ImTwitter, ImLinkedin } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { GiWorld } from "react-icons/gi";
//icon
import { RiArrowRightLine } from "react-icons/ri";

import "../style/contact.css";
import Footer from "./Footer";
const Contact = () => {
  return (
    <>
      <div>
        <Background
          title="Contact US"
          info="Home / Contact"
          background={background}
        />
        <div className="contact-container">
          <h1
            style={{
              textAlign: "center",
              marginTop: "100px",
              marginBottom: "100px",
            }}
          >
            We love meeting new people <br /> and helping them.
          </h1>
          <div className="form-container">
            <Fade left>
              <div className="contact-info">
                <div className="contact-section">
                  <div className="section-icon">
                    <AiOutlineMail />
                  </div>
                  <p>info@yourdomain.com</p>
                </div>
                <div className="contact-section">
                  <div className="section-icon">
                    <BsTelephone />
                  </div>
                  <p>+1 (378) 400-1234</p>
                </div>
                <div className="contact-section">
                  <div className="section-icon">
                    <GiWorld />
                  </div>
                  <p>www.yourdomain.com</p>
                </div>
                <div style={{ marginTop: "30px" }}>
                  <ImFacebook className="contact-icon" />
                  <ImTwitter className="contact-icon" />

                  <ImLinkedin className="contact-icon" />

                  <SiInstagram className="contact-icon" />
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="contact-section">
                <div className="contact-form">
                  <div>
                    <input type="text" placeholder="Name" />
                  </div>
                  <div>
                    <input type="text" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" placeholder="Subject" />
                  </div>
                  <div>
                    <input type="number" placeholder="Number" />
                  </div>
                  <div className="textarea">
                    <textarea
                      name=""
                      id=""
                      cols="20"
                      rows="5"
                      placeholder="Hello I'm interested in..."
                    ></textarea>
                  </div>
                  <div className="btn-get ">
                    <a href="mailto: adedokunpeter11@gmail.com">
                      <button>Send Now</button>
                    </a>
                    <span>
                      <RiArrowRightLine className="arrow-right" />
                    </span>
                  </div>
                </div>
                <br />
              </div>
            </Fade>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
