import React from 'react'
import ErrorBackground from "../images/error-background.jpg";
import "../style/error.css"
import { RiArrowRightLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
const Error = () => {
  return (
    <div className="error-background">
      <div className="error-text">
        <h1>404</h1>
        <p>
          We are sorry, but the page you <br /> requested was not found
        </p>
        <br />
        <br />
        <br />

        <NavLink to="/">
          <div className="btn-get">
            <button>Back To Home</button>
            <span>
              <RiArrowRightLine className="arrow-right" />
            </span>
          </div>
        </NavLink>
      </div>
      <div className="error-img">
        <img src={ErrorBackground} alt="" />
      </div>
    </div>
  );
}

export default Error