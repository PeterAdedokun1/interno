import React from 'react'
import Fade from "react-reveal/Fade";

const TeamPerson = ({id,TeamImg1,Teamheading,subHeading, facebook, twitter, linkedin}) => {
  return (
    <Fade bottom>
      <div className="team-img-container">
        <img src={TeamImg1} alt="" />
        <div className="team-text">
          <h3>{Teamheading}</h3>
          <p>{subHeading}</p>
        </div>
        <div className="team-container-icon">
          <span className="team-icon">{facebook}</span>
          <span className="team-icon">{twitter}</span>
          <span className="team-icon">{linkedin}</span>
        </div>
      </div>
    </Fade>
  );
}

export default TeamPerson