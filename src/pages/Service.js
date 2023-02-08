import React from "react";
import Background from "../component/Background";
import background from "../images/service-background.png";
import { RiArrowRightLine } from "react-icons/ri";
import Fade from "react-reveal/Fade";

//service images
import serviceImg1 from "../images/service-img1.jpg";
import serviceImg2 from "../images/service-img2.jpg";
import serviceImg3 from "../images/service-img3.jpg";
import serviceImg4 from "../images/service-img4.jpg";
//service icons images
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.svg";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
//serviceSingle
import { serviceSingle } from "../data";
//styling
import "../style/service.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Service = () => {
  return (
    <>
      <div>
        <Background
          title="Service"
          info="Home / Services"
          background={background}
        />
        {/* project container*/}

        <div
          className="project-container"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          {serviceSingle.map((single) => {
            const { id, heading, text, link, arrow } = single;
            return (
              <Fade bottom>
                <div className="project" key={single.id}>
                  <h3>{heading}</h3>
                  <p>{text}</p>
                  <Link to={`/service/${id}`}>
                    <div className="read-more">
                      <a href="">{link}</a>
                      <span>{arrow}</span>
                    </div>
                  </Link>
                </div>
              </Fade>
            );
          })}
        </div>

        {/* How we work */}

        <div className="service-contain">
          <h1 style={{ textAlign: "center" }}>How We Work</h1>
          <p style={{ textAlign: "center", marginBottom: "60px" }}>
            It is a long established fact will be distracted.Lorem Ipsum is
            simply dummy text of <br /> the printing and typesetting industry.
          </p>
          <div className="service-container">
            <Fade left>
              <div className="service-container1">
                <img src={serviceImg1} alt="" className="service-img" />
              </div>
            </Fade>
            <Fade right>
              <div className="service-container2">
                <div className="service-container-heading">
                  <img src={icon1} alt="" />
                  <h1>01</h1>
                </div>
                <div className="service-text">
                  <h2>Concept & Details</h2>
                  <p>
                    It is a long established fact will be distracted. <br />{" "}
                    Lorem Ipsum is simply dummy from text of the <br /> and
                    typesetting indufstry.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="service-container3">
                <img src={serviceImg2} alt="" className="service-img" />
              </div>
            </Fade>
            <Fade left>
              <div className="service-container4">
                <div className="service-container-heading">
                  <img src={icon2} alt="" />
                  <h1>02</h1>
                </div>
                <div className="service-text">
                  <h2>Idea for work</h2>
                  <p>
                    It is a long established fact will be distracted. <br />{" "}
                    Lorem Ipsum is simply dummy from text of the <br /> and
                    typesetting indufstry.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="service-container5">
                <img src={serviceImg3} alt="" className="service-img" />
              </div>
            </Fade>
            <Fade right>
              <div className="service-container6">
                <div className="service-container-heading">
                  <img src={icon3} alt="" />
                  <h1>03</h1>
                </div>
                <div className="service-text">
                  <h2>Design</h2>
                  <p>
                    It is a long established fact will be distracted. <br />{" "}
                    Lorem Ipsum is simply dummy from text of the <br /> and
                    typesetting indufstry.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="service-container7">
                <img src={serviceImg4} alt="" className="service-img" />
              </div>
            </Fade>
            <Fade left>
              <div className="service-container8">
                <div className="service-container-heading">
                  <img src={icon4} alt="" />
                  <h1>04</h1>
                </div>
                <div className="service-text">
                  <h2>Perfection</h2>
                  <p>
                    It is a long established fact will be distracted. <br />{" "}
                    Lorem Ipsum is simply dummy from text of the <br /> and
                    typesetting indufstry.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        {/* JOIN INTERNO */}
        <div className="join-interno">
          <h1>Wanna join the interno?</h1>
          <p>It is a long established fact will be distracted</p>
          <div className="btn-get join-interno-btn ">
            <button>Contact with us</button>
            <span>
              <RiArrowRightLine className="arrow-right join-arrow" />
            </span>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Service;
