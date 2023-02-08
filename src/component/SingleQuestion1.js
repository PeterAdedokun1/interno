import React, { useState } from "react";
// import { RiArrowRightSLine } from "react-icons/ri";
// ;
import "../style/singlequestion.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const SingleQuestion1 = ({ heading, textHeading, textSmall }) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <div className="accordion-container">
      <div className="single-heading1" onClick={() => setOpen1(!open1)}>
        <h2>{heading}</h2>
        <button className="question-btn">
          <MdOutlineKeyboardArrowRight className={`${open1 && "rotate"}`} />
        </button>
      </div>
    
      {open1 && (
        <div>
          {open1 && (
            <div
              className="single-sub-heading1"
              onClick={() => setOpen2(!open2)}
            >
              <h4> {textHeading}</h4>
              <button className="question-btn">
                <MdOutlineKeyboardArrowRight
                  className={`${open2 && "rotate"}`}
                />
              </button>
            </div>
          )}

          {open2 && <p className="small-text">{textSmall}</p>}
        </div>
      )}
    </div>
  );
};

export default SingleQuestion1;

//
