import React from "react";
import { IoIosArrowForward } from "react-icons/io";
const Menu = ({ menuItems }) => {
  return (
    <div className="menu-project-container">
      {menuItems.map((item) => {
        const { id, heading, text, img } = item;
        return (
          <div key={id}>
            <img src={item.img} alt="" />
            <div className="project-details">
              <div>
                <h3>{heading}</h3>
                <p>{text}</p>
              </div>
              <span>
                <IoIosArrowForward />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
