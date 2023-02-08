import React, { Children, useEffect, useState } from "react";
import Background from "../component/Background";
import background from "../images/about-background.png";
import AboutContainer1 from "../images/about-container.jpg";
import AboutContainer2 from "../images/about-container1.jpg";
import { RiArrowRightLine } from "react-icons/ri";

import PersonImg1 from "../images/about-person-1.png";
import PersonImg2 from "../images/about-person-2.png";
import PersonImg3 from "../images/about-person-3.png";
import PersonImg4 from "../images/about-person-4.png";

//pattern images

import Pattern1 from "../images/pattern-1.png";
import Pattern2 from "../images/pattern-2.png";

//flip icons
import { ImFacebook, ImTwitter, ImLinkedin } from "react-icons/im";
import { SiInstagram } from "react-icons/si";

import "../style/about.css";

//react reveal
import Fade from "react-reveal/Fade";
import Footer from "./Footer";

const About = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setLoading(false);
    setQuote(data);
  };
  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <>
      {" "}
      <div style={{ marginBottom: "70px" }}>
        <Background
          title="About US"
          info="Home / About us"
          background={background}
        />

        {loading ? (
          <h1 style={{ textAlign: "center", marginTop: "150px" }}>loading</h1>
        ) : (
          <div className="quote-generator">
            <img src={Pattern2} alt="" />
            <div>
              <h5>{quote.content}</h5>
              <p className="quote-author"> - {quote.author}</p>
            </div>
            <img src={Pattern1} alt="" />
          </div>
        )}

        <div className="about-container">
          <Fade right>
            <div className="about-container-1">
              <img src={AboutContainer1} alt="" />
            </div>
          </Fade>
          <Fade left>
            <div className="about-container-2">
              <h1>What We DO</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </p>
              <div className="btn-get">
                <button>Our Concept</button>
                <span>
                  <RiArrowRightLine className="arrow-right" />
                </span>
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className="about-container-3">
              <img src={AboutContainer2} alt="" />
            </div>
          </Fade>
          <Fade right>
            <div className="about-container-4">
              <h1>The End Result</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </p>
              <div className="btn-get">
                <button>Our Portfolio</button>
                <span>
                  <RiArrowRightLine className="arrow-right" />
                </span>
              </div>
            </div>
          </Fade>
        </div>
        {/* About  WHAT POEPLE THINK ABOUT US  */}
        <div className="about-flip-container">
          <h1>
            What People Think <br /> About Us
          </h1>
          <div className="big-flip-container">
            <Fade bottom>
              <div className="flip-container">
                <img src={PersonImg1} alt="" className="flip-image" />
                <div className="flip-overlay">
                  <h1>Charlotte Levi</h1>
                  <p className="city">Design , Australia</p>
                  <div className="flip-icon">
                    <ImFacebook className="icon" />
                    <ImTwitter className="icon" />
                    <ImLinkedin className="icon" />
                    <SiInstagram className="icon" />
                  </div>
                  <p>+1 (378) 400-1234</p>
                  <p>julie@email.com</p>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="flip-container">
                <img src={PersonImg2} alt="" className="flip-image" />
                <div className="flip-overlay">
                  <h1>Nattasha Julie</h1>
                  <p className="city">Design , Australia</p>
                  <div className="flip-icon">
                    <ImFacebook className="icon" />
                    <ImTwitter className="icon" />
                    <ImLinkedin className="icon" />
                    <SiInstagram className="icon" />
                  </div>
                  <p>+1 (378) 400-1234</p>
                  <p>julie@email.com</p>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="flip-container">
                <img src={PersonImg3} alt="" className="flip-image" />
                <div className="flip-overlay">
                  <h1>John Smith</h1>
                  <p className="city">Design , Australia</p>
                  <div className="flip-icon">
                    <ImFacebook className="icon" />
                    <ImTwitter className="icon" />
                    <ImLinkedin className="icon" />
                    <SiInstagram className="icon" />
                  </div>
                  <p>+1 (378) 400-1234</p>
                  <p>julie@email.com</p>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="flip-container">
                <img src={PersonImg4} alt="" className="flip-image" />
                <div className="flip-overlay">
                  <h1>Nora Owen</h1>
                  <p className="city">Design , Australia</p>
                  <div className="flip-icon">
                    <ImFacebook className="icon" />
                    <ImTwitter className="icon" />
                    <ImLinkedin className="icon" />
                    <SiInstagram className="icon" />
                  </div>
                  <p>+1 (378) 400-1234</p>
                  <p>julie@email.com</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        {/* Form container */}
        <div className="about-form-container">
          <div className="">
            <h1>
              Creative project? Let's have <br /> a productive talk
            </h1>
          </div>
          <form className="form-class">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <br />
            {/* <textarea
            name=""
            id=""
            cols="160"
            rows="6"
            placeholder="Hello I am Intrested in.."
          ></textarea> */}
            <div className="btn-get">
              <button>Send Now</button>
              <span>
                <RiArrowRightLine className="arrow-right" />
              </span>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;

