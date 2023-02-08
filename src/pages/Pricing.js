import React from "react";
import "../style/pricing.css";
import Background from "../component/Background";
import background from "../images/pricing-backImg.jpg";
import { RiArrowRightLine } from "react-icons/ri";
import Fade from "react-reveal/Fade";
import Footer from "./Footer";

const pricing = () => {
  return (
    <>
      <Background
        title="Pricing & Plan"
        info="Home  / Pricing"
        background={background}
      />
      <div className="pricing-container">
        <Fade bottom>
          <div className="pricing">
            <h3>Design advices</h3>
            <div>
              <span className="span-1">$</span>
              <span className="span-2">29</span> <br />
              <span className="span-3">/month</span>
            </div>
            <br />
            <hr />
            <p>General living spaces advices</p>
            <p>Rennovation advices</p>
            <p>Interior design advices</p>
            <p>Furniture reorganization</p>
            <p>Up to 5 hours meetings</p>
            <br />
            <div className="btn-get price-btn">
              <button className="price-start">Get Started</button>
              <span>
                <RiArrowRightLine className="arrow-right price-arrow  " />
              </span>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="pricing">
            <h3>Complete interior</h3>
            <div>
              <span className="span-1">$</span>
              <span className="span-2">39</span>
              <br />
              <span className="span-3">/month</span>
            </div>

            <br />
            <hr />
            <div className="strong-popular">
              <strong className="popular">Most Popular Plans</strong>
            </div>

            <p>Complete home redesign</p>
            <p>Interior and exterior works</p>
            <p>Modular interior planning</p>
            <p>Kitchen design</p>
            <p>Garages Organization</p>
            <br />

            <div className="btn-get price-btn">
              <button className="price-start">Get Started</button>
              <span>
                <RiArrowRightLine className="arrow-right price-arrow" />
              </span>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="pricing">
            <h3>Furniture design</h3>
            <div>
              <span className="span-1">$</span>
              <span className="span-2">59</span>
              <br />
              <span className="span-3">/month</span>
            </div>
            <br />
            <hr />

            <p>Furniture for living room</p>
            <p>Furniture refurbishment</p>
            <p>Sofas and amchairs</p>
            <p>Tables and chairs</p>
            <p>Kitchens</p>
            <br />
            <div className="btn-get price-btn">
              <button className="price-start">Get Started</button>
              <span>
                <RiArrowRightLine className="arrow-right price-arrow" />
              </span>
            </div>
          </div>
        </Fade>
      </div>
      <Footer/>
    </>
  );
};

export default pricing;
