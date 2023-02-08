import React from "react";
import Background from "../component/Background";
import background from "../images/service-single.jpg";
import { useParams } from "react-router-dom";
import { serviceSingle } from "../data";
import "../style/serviceSingle.css";
// logo images

import ModernHome from "../images/modernhome.svg";
import Vs from "../images/vs.svg";
import Brand from "../images/brand.svg";
import NatureHome from "../images/naturehome.svg";
import Classic from "../images/classic.svg";
//single-service-img
import singleServiceImg from "../images/singleServiceImg.jpg";
import { RiArrowRightLine } from "react-icons/ri";

//react-reveal
import Fade from "react-reveal/Fade";
import Footer from "./Footer";

const ServiceSingle = () => {
  const { singleId } = useParams();
  const { id } = useParams();
  const teamDetails = serviceSingle.find((item) => {
    return item.id === parseInt(singleId);
  });

  const { Singleheading, text2, text3 } = teamDetails;

  return (
    <>
      <div>
        <Background
          title="Service Single"
          info="Home / Services Single"
          background={background}
        />
        <div className="Service-single-section">
          <div className="service-single-container">
            <Fade left>
              <h1>{Singleheading}</h1>
            </Fade>
            <Fade right>
              <div>
                <p className="single-text1">{text2}</p>
                <br />
                <p>{text3}</p>
                <br />
                <p>{text3}</p>
              </div>
            </Fade>
          </div>
          <div className="logo-single-container">
            <img src={ModernHome} alt="" />
            <img src={Vs} alt="" />
            <img src={Brand} alt="" />
            <img src={NatureHome} alt="" />
            <img src={Classic} alt="" />
          </div>

          {/* Use of interior and make an art */}
          <div className="interior-art">
            <Fade left>
              <div className="interior">
                <h1>Use of Interior</h1>
                <li>
                  <span> 1 </span> We Provide high quality design services
                </li>
                <li>
                  <span> 2 </span> Project on time and Lastest Design
                </li>
                <li>
                  <span> 3 </span> Scientific Skills for a better result
                </li>
                <li>
                  <span> 4 </span> Renovations Benefit of Service
                </li>
                <li>
                  <span> 5 </span> We are confident about our projects
                </li>
              </div>
            </Fade>
            <Fade right>
              <div className="MakeArt">
                <h1>Make An Art</h1>
                <li>
                  <span> 1 </span> We Provide high quality design services
                </li>
                <li>
                  <span> 2 </span> Project on time and Lastest Design
                </li>
                <li>
                  <span> 3 </span> Scientific Skills for a better result
                </li>
                <li>
                  <span> 4 </span> Renovations Benefit of Service
                </li>
                <li>
                  <span> 5 </span> We are confident about our projects
                </li>
              </div>
            </Fade>
          </div>

          {/* We love Design  */}

          <div className="singleDesign-container">
            <Fade left>
              <img src={singleServiceImg} alt="" />
            </Fade>
            <Fade right>
              <div className="single-design">
                <h1>
                  We love design. That's <br /> how we got here.
                </h1>
                <br />
                <p>
                  It is a long established fact that a reader will be distracted
                  by the of readable content .
                </p>
                <br />
                <div className="btn-get">
                  <button>Our Portfolio</button>
                  <span>
                    <RiArrowRightLine className="arrow-right" />
                  </span>
                </div>
              </div>
            </Fade>
          </div>

          {/* LOGO */}
        </div>

        <div
          className="home-number-container"
          style={{ marginBottom: "150px" }}
        >
          <div className="home-numbers">
            <div className="numbers">
              <h1>12</h1>
              <p>Years of experience</p>
            </div>
            <div className="vertical-line"></div>

            <div className="numbers">
              <h1>85</h1>
              <p>Sucess Project</p>
            </div>
            <div className="vertical-line"></div>

            <div className="numbers">
              <h1>15</h1>
              <p>Active Project</p>
            </div>
            <div className="vertical-line"></div>
            <div className="numbers">
              <h1>95</h1>
              <p>Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ServiceSingle;
