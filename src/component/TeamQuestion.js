import React, { useState } from "react";
import "../style/teamQuestion.css";
// BiPlus;
import { BiPlus, BiMinus } from "react-icons/bi";

const TeamQuestion = ({ heading, text }) => {
  const [click, setClick] = useState(false);
  return (
    <div
      className={`teamQuestion-container ${
        click && "teamQuestion-container2 "
      }`}
    >
      <div
        className={`teamQuestion-heading ${click && "teamQuestion-heading2"}`}
        onClick={() => setClick(!click)}
      >
        <p className="heading">{heading}</p>
        <button className="teamQuestion-btn">
          {click ? <BiMinus /> : <BiPlus />}
        </button>
      </div>
      {click && <p className="teamQuestion-text">{text}</p>}
    </div>
  );
};

export default TeamQuestion;
