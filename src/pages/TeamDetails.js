import React from "react";
import { useParams } from "react-router-dom";
import { teams, TeamQuestions } from "../data";
import Background from "../component/Background";
import background from "../images/TeamDetailsBackground.jpg";
//icons
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { ImFacebook, ImTwitter, ImLinkedin } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { RiArrowRightLine } from "react-icons/ri";

import { GiWorld } from "react-icons/gi";
import PersonImg1 from "../images/about-person-1.png";
import PersonImg2 from "../images/about-person-2.png";
import PersonImg3 from "../images/about-person-3.png";
import PersonImg4 from "../images/about-person-4.png";
import Fade from "react-reveal/Fade";

//style
import "../style/TeamDetails.css";
import TeamQuestion from "../component/TeamQuestion";
import Footer from "./Footer";
const TeamDetails = () => {
  const { TeamId } = useParams();
  const { id } = useParams();
  const teamDetails = teams.find((item) => {
    return item.id === parseInt(TeamId);
  });

  const {
    Teamheading,
    subHeading,
    facebook,
    twitter,
    teamDetailsImg,
    teamDetailsBackground,
    profession,
    desc,
    bioText1,
    bioText2,
  } = teamDetails;
  return (
    <>
      <div>
        <Background
          title="Professional Single"
          info="Home / Team Single"
          background={background}
        />
        <div className="team-single-info-section">
          <Fade left>
            <img src={teamDetailsImg} alt="" />
          </Fade>
          <Fade right>
            <div className="team-single-info">
              <h1>{Teamheading}</h1>
              <p className="profession">{profession}</p>
              <p className="team-desc">{desc}</p>
              <div className="team-desc-section">
                <div className="contact-section team-info-section">
                  <div className="section-icon team-details-icon">
                    <AiOutlineMail />
                  </div>
                  <p>info@yourdomain.com</p>
                </div>
                <div className="contact-section team-info-section">
                  <div className="section-icon team-details-icon">
                    <BsTelephone />
                  </div>
                  <p>+1 (378) 400-1234</p>
                </div>
                <div className="contact-section team-info-section">
                  <div className="section-icon team-details-icon">
                    <GiWorld />
                  </div>
                  <p>www.yourdomain.com</p>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <ImFacebook className="contact-icon" />
                  <ImTwitter className="contact-icon" />

                  <ImLinkedin className="contact-icon" />

                  <SiInstagram className="contact-icon" />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        {/* SHORT BIOGRAPHY */}
        <div className="bio-heading">
          <Fade bottom>
            <h1>Short Biography</h1>
          </Fade>
          <br />
          <Fade bottom>
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary to popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, njecthumour randomised
              words which don't look even slightly believable.
              <br />
              <br />
              Embarrassing hidden in the middle of text. All the Lorem Ipsum
              generators on the Internet tend to repeat predefined but the
              majority have suffered alteration in some form chunks as
              necessary.
            </p>
          </Fade>
          <br />
          {/* Simplicity and Functionality */}
          <div className="simplicity-Question-container">
            <Fade left>
              <div className="simplicity">
                <h3>Simplicity and Functionality</h3>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                  turpmaximus.posuere in belief.
                  <br />
                  <br />
                  There are many variations of passages of Lorem Ipsum from{" "}
                  <br />
                  available, but the majority have suffered alteration in some
                  form, njecthumour
                </p>
                {/* Skills sectoin */}
                <ul className="team-list">
                  <li className="team-list-item">
                    <div className="team-skill ">
                      <p>Project Design</p>
                    </div>
                    <div className="team-progress-bar">
                      <div className="team-project team-project1">
                        <span className="team-span">65%</span>

                        <span className="circle"></span>
                      </div>
                    </div>
                  </li>
                  <li className="team-list-item ">
                    <div className="team-skill ">
                      <p>Team Management</p>
                    </div>
                    <div className="team-progress-bar">
                      <div className="team-project team-manage">
                        <span className="team-team">95%</span>

                        <span className="circle"></span>
                      </div>
                    </div>
                  </li>
                  <li className="team-list-item">
                    <div className="team-skill">
                      <p>Client Satisfaction</p>
                    </div>
                    <div className="team-progress-bar">
                      <div className="team-project client-team">
                        <span className="team-client">75%</span>

                        <span className="circle"></span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Fade>
            <Fade right>
              <div className="Question">
                <h3>Questions and Answers</h3>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                  turpmaximus.posuere in.
                </p>
                <br />
                {TeamQuestions.map((question) => {
                  return <TeamQuestion key={question.id} {...question} />;
                })}
              </div>
            </Fade>
          </div>
        </div>
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

        <h1 style={{ textAlign: "center", marginTop: "100px" }}>Contact Me</h1>
        <div style={{ marginBottom: "150px" }}>
          <div className="contact-section team-contact-form">
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
            </div>
            <br />
          </div>
          <div className="teaM-input">
            <input type="checkbox" />
            <label htmlFor="">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
          <a href="mailto: adedokunpeter11@gmail.com">
            <div className="btn-get TeaM-bTn">
              <button>Send Now</button>
              <span>
                <RiArrowRightLine className="arrow-right" />
              </span>
            </div>
          </a>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TeamDetails;
