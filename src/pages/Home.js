import React from "react";
import "../style/Home.css";
import { RiArrowRightLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import CreatBackground from "../images/create-background.jpg";
import { MdCall } from "react-icons/md";

import HomeImg1 from "../images/homepeople1.jpg";
import HomeImg2 from "../images/homepeople2.jpg";
import HomeImg3 from "../images/homepeople3.jpg";

// logo images

import ModernHome from "../images/modernhome.svg";
import Vs from "../images/vs.svg";
import Brand from "../images/brand.svg";
import NatureHome from "../images/naturehome.svg";
import Classic from "../images/classic.svg";

//project images

import ProjectImg1 from "../images/project-img1.png";
import ProjectImg2 from "../images/project-img2.png";
import ProjectImg3 from "../images/project-img3.png";
import ProjectImg4 from "../images/project-img4.png";

// Article
import ArticleImg1 from "../images/articleImg1.png";
import ArticleImg2 from "../images/articleImg2.png";
import ArticleImg3 from "../images/articleImg3.png";

//Aos
import Fade from "react-reveal/Fade";
import { Rotate, Zoom } from "react-awesome-reveal";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div>
        <div className="background-container">
          <Fade left>
            <div className="background-text">
              <h1>
                Let Your Home <br /> Be Unique
              </h1>
              <p>
                There are many variations of the passages of lorem Ipsum from
                available, varation of the passanges
              </p>
            </div>
          </Fade>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="project-container">
          <Fade bottom>
            <div className="project">
              <h3>Project Plan</h3>
              <p>
                There are many variations of the <br /> passages of lorem Ipsum
                from <br />
                available, majority.
              </p>
              <div className="read-more">
                <a href="">Read More</a>
                <span>
                  <RiArrowRightLine />
                </span>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="project">
              <h3>Interior Work</h3>
              <p>
                There are many variations of the <br /> passages of lorem Ipsum
                from <br />
                available, majority.
              </p>
              <div className="read-more">
                <a href="">Read More</a>
                <span>
                  <RiArrowRightLine />
                </span>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="project">
              <h3>Realization</h3>
              <p>
                There are many variations of the <br /> passages of lorem Ipsum
                from <br />
                available, majority.
              </p>
              <div className="read-more">
                <a href="">Read More</a>
                <span>
                  <RiArrowRightLine />
                </span>
              </div>
            </div>
          </Fade>
        </div>

        {/* Create stylish */}
        <br />
        <br />
        <br />
        <br />
        <div className="create">
          <Fade right>
            <div className="create-back">
              <img src={CreatBackground} alt="" />
            </div>
          </Fade>
          <Fade left>
            <div className="style">
              <h2>
                We Create The Art Of <br /> Stylish Living Stylishly
              </h2>
              <p>
                It is a long established fact that a reader will be <br />
                distracted by the of readable content of a page <br /> when
                lookings at its layouts the points of using <br /> that it has a
                more-or-less normal.
              </p>
              <br />
              <div className="call-container">
                <span className="telephone">
                  <MdCall />
                </span>
                <div>
                  <h4>08145885175</h4>
                  <span>Call us Anytime</span>
                </div>
              </div>
              <br />
              <br />
              <div className="btn-get estimate">
                <button>Get Free Estimate</button>
                <span>
                  <RiArrowRightLine className="arrow-right" />
                </span>
              </div>
            </div>
          </Fade>
        </div>
        {/* What people think about us */}

        <div className="home-people">
          <h2>
            What the People Think <br /> About Us
          </h2>
          <div className="home-poeple-container">
            <Fade bottom>
              <div className="home-people-section">
                <div className="home-name-section">
                  <img src={HomeImg1} alt="" />
                  <div>
                    <h3>Nattasha Mith</h3>
                    <p>Syndey, USA</p>
                  </div>
                </div>

                <p>
                  Lorem Ipsum is simply dummy <br /> text of the typesetting
                  industry. <br />
                  Ipsum has been.
                </p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="home-people-section">
                <div className="home-name-section">
                  <img src={HomeImg2} alt="" />
                  <div>
                    <h3>Nattasha Mith</h3>
                    <p>Syndey, USA</p>
                  </div>
                </div>

                <p>
                  Lorem Ipsum is simply dummy <br /> text of the typesetting
                  industry. <br />
                  Ipsum has been scrambled it <br /> to make a type book.
                </p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="home-people-section">
                <div className="home-name-section">
                  <img src={HomeImg3} alt="" />
                  <div>
                    <h3>Nattasha Mith</h3>
                    <p>Syndey, USA</p>
                  </div>
                </div>

                <p>
                  Lorem Ipsum is simply dummy <br /> text of the typesetting
                  industry. <br />
                  Ipsum has been scrambled.
                </p>
              </div>
            </Fade>
          </div>
        </div>

        {/* LOGO */}
        <div className="logo-home-container">
          <img src={ModernHome} alt="" />
          <img src={Vs} alt="" />
          <img src={Brand} alt="" />
          <img src={NatureHome} alt="" />
          <img src={Classic} alt="" />
        </div>

        {/* Follow our projects */}

        <div className="follow-project">
          <div className="follow-project-heading">
            <h1>Follow Our Projects</h1>
            <p>
              It is a long established fact that a render will be distracted by
              the readable content of page lookings at its layouut point{" "}
            </p>
          </div>
          <div className="home-kitchen-container">
            <Fade left>
              <div className="home-grid-container">
                <div className="full-home-container">
                  <div className="home-div-container home-kitchen-container1">
                    <img src={ProjectImg1} alt="" />
                    <div
                      className="home-overlay"
                      style={{ borderTopRightRadius: "100px" }}
                    >
                      <h3>Modern Kitchen</h3>
                    </div>
                  </div>
                  <div className="home-kitchen-details">
                    <div className="home-kitchen-texts">
                      <h3>Minimal Bedroom</h3>
                      <p>Decor /Architecture</p>
                    </div>
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="home-grid-container">
                <div className="full-home-container">
                  <div className="home-div-container home-kitchen-container2">
                    <img src={ProjectImg2} alt="" />
                    <div
                      className="home-overlay"
                      style={{ borderTopLeftRadius: "100px" }}
                    >
                      <h3>Modern Kitchen</h3>
                    </div>
                  </div>
                  <div className="home-kitchen-details">
                    <div className="home-kitchen-texts">
                      <h3>Minimal Bedroom</h3>
                      <p>Decor /Architecture</p>
                    </div>
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="home-grid-container">
                <div className="full-home-container">
                  <div className="home-div-container home-kitchen-container3">
                    <img src={ProjectImg3} alt="" />
                    <div
                      className="home-overlay"
                      style={{ borderBottomRightRadius: "100px" }}
                    >
                      <h3>Modern Kitchen</h3>
                    </div>
                  </div>
                  <div className="home-kitchen-details">
                    <div className="home-kitchen-texts">
                      <h3>Minimal Bedroom</h3>
                      <p>Decor /Architecture</p>
                    </div>
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="home-grid-container">
                <div className="full-home-container">
                  <div className="home-div-container home-kitchen-container4">
                    <img src={ProjectImg4} alt="" />
                    <div
                      className="home-overlay"
                      style={{ borderBottomLeftRadius: "100px" }}
                    >
                      <h3>Modern Kitchen</h3>
                    </div>
                  </div>
                  <div className="home-kitchen-details">
                    <div className="home-kitchen-texts">
                      <h3>Minimal Bedroom</h3>
                      <p>Decor /Architecture</p>
                    </div>
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        {/* Home numbers*/}

        <div className="home-number-container">
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* Articles and review */}

        <div className="article-review">
          <div>
            <h1>Articles & News</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the of readable content <br /> of a page when lookings at its
              layouts the points of using.
            </p>
          </div>
          {/* Grid container*/}
          <div className="article-gird-container">
            <Fade bottom>
              <div className="article-img-container">
                <div className="article-border">
                  <div className="article-overlay-container">
                    <img src={ArticleImg1} alt="" />
                    <div className="article-overlay">
                      <button>Kitchan Design </button>
                    </div>
                  </div>
                  <div>
                    <h2 className="article-head">
                      Let’s Get Solution For <br /> Building Construction <br />{" "}
                      Work
                    </h2>

                    <div className="home-kitchen-details">
                      <div className="home-kitchen-texts">
                        <p>28th January,2022</p>
                      </div>
                      <span>
                        <IoIosArrowForward />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="article-img-container">
                <div className="article-border">
                  <div className="article-overlay-container">
                    <img src={ArticleImg2} alt="" />
                    <div className="article-overlay">
                      <button>Living Design </button>
                    </div>
                  </div>
                  <div>
                    <h2 className="article-head">
                      Low Cost Latest Invented <br /> Interior Designing <br />{" "}
                      Ideas.
                    </h2>
                    <div className="home-kitchen-details">
                      <div className="home-kitchen-texts">
                        <p>28th January,2022</p>
                      </div>
                      <span>
                        <IoIosArrowForward />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="article-img-container">
                <div className="article-border">
                  <div className="article-overlay-container">
                    <img src={ArticleImg3} alt="" />
                    <div className="article-overlay">
                      <button>Interior Design </button>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h2 className="article-head">
                        Best For Any Office & <br /> Business Interior <br />{" "}
                        Solution
                      </h2>
                      <div className="home-kitchen-details">
                        <div className="home-kitchen-texts">
                          <p>28th January,2022</p>
                        </div>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <br />
        <br />
        <br />
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

export default Home;
