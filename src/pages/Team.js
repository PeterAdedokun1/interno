import React from "react";
import Background from "../component/Background";
import background from "../images/team-background.jpg";
//images
import Img1 from "../images/about-person-1.png";
import Img2 from "../images/about-person-2.png";
import Img3 from "../images/about-person-3.png";
import Img4 from "../images/about-person-4.png";

import Img5 from "../images/team-img1.jpg";
import Img6 from "../images/team-img2.jpg";
import Img7 from "../images/team-img3.jpg";
import Img8 from "../images/team-img4.jpg";
import TeamPerson from "../component/TeamPerson";



import { teams } from "../data";
import { ImFacebook, ImTwitter, ImLinkedin } from "react-icons/im";
//style
import "../style/team.css";

import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Team = () => {
  return (
    <>
      <div>
        <Background
          title="Our Professional"
          info="Home / Team"
          background={background}
        />
        <div className="team-container">
          {teams.map((team) => {
            return (
              <Link to={`/team/${team.id}`} key={team.id}>
                <TeamPerson {...team} />
              </Link>
            );
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Team;
