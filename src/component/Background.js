import React from "react";

import "../style/background.css";

const Background = ({ title, info, background, children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
              marginTop: "25px",
          }}
          
    >
      <div className="section-title">
        <div className="section-info">
          <h1>{title}</h1>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};

export default Background;
