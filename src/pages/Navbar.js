import React,{useState} from "react";
import { links } from "../data";
import { NavLink } from "react-router-dom";
import Search from "../images/search.png";
import Logo from "../images/Logo.png";
import  Hamburger  from "hamburger-react";

const Navbar = () => {
    const [isOpen , setOpen] = useState(false)
  return (
    <nav>
      <div className="nav-left">
        <div className="nav-logo">
          <img src={Logo} alt="" />
          <h3>Interno</h3>
        </div>
        <div className="btn-container">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      <ul
        className={`nav-right ${isOpen ? "show-sidebar2" : "show-sidebar1"}`}
      >
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <NavLink
                to={url}
                className={({ isActive }) => `${isActive && "active"}`}
              >
                {text}
              </NavLink>
            </li>
          );
        })}
        <img className="search-btn" src={Search} alt="" />
      </ul>
    </nav>
  );
};

export default Navbar;
