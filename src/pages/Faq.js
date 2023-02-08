import React from "react";
import Background from "../component/Background";
import background from "../images/faq-background.jpg";
import { Questions1 } from "../data";
import { Questions2 } from "../data";

import SingleQuestion1 from "../component/SingleQuestion1";
//images
import questionBackground1 from "../images/question-img1.jpg";
import QuestionBackground2 from "../images/question-img2.jpg";
import Fade from "react-reveal/Fade";

//style
import "../style/faq.css";
import Footer from "./Footer";
const Faq = () => {
  return (
    <>
      <div style={{ marginBottom: "130px" }}>
        <Background title="Faq's" info="Home / Faq" background={background} />
        {/* Every Question Answered */}
        <div className="questions1">
          <h1 style={{ textAlign: "center", marginTop: "60px" }}>
            Every Questions Answered
          </h1>
          <br />
          <br />
          <br />
          <div className="question-container-1">
            <Fade right>
              <div className="question-IMG">
                <img src={questionBackground1} alt="" />
              </div>
            </Fade>
            <Fade left>
              <div style={{ marginTop: "60px" }} className="map-container">
                {Questions1.map((question) => {
                  return <SingleQuestion1 key={question.id} {...question} />;
                })}
              </div>
            </Fade>
          </div>
        </div>
        {/* Questions two */}
        <div className="questions2">
          <h1 style={{ textAlign: "center", marginTop: "60px" }}>
            Project Related Questions
          </h1>
          <br />
          <br />
          <br />
          <div className="question-container-2">
            <Fade left>
              <div className="question-IMG-2">
                <img src={QuestionBackground2} alt="" />
              </div>
            </Fade>
            <Fade right>
              <div style={{ marginTop: "60px" }} className="map-container-2">
                {Questions2.map((question) => {
                  return <SingleQuestion1 key={question.id} {...question} />;
                })}
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Faq;
