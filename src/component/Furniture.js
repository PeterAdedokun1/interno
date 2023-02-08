import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const Furniture = ({id, smallimg, buttonOverlay, heading, date}) => {
  return (
    <div className="article-img-container">
      <div className="article-border">
        <div className="article-overlay-container">
          <img src={smallimg} alt="" />
          <div className="article-overlay">
            <button>{buttonOverlay}</button>
          </div>
        </div>
        <div>
          <h2 className="article-head" style={{ color: "#292F36" }}>
            {heading}
          </h2>

          <div className="home-kitchen-details">
            <div className="home-kitchen-texts">
              <p>{date}</p>
            </div>
            <span>
              <IoIosArrowForward style={{color: "#cda274"}} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furniture