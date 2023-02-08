import React, { useEffect, useState } from "react";
import Background from "../component/Background";
import background from "../images/project-background.jpg";
import Categories from "../component/Categories";
import Menu from "../component/Menu";
import { project } from "../data";
import paginate from "../component/util";
import "../style/project.css";
import Footer from "./Footer";

const allCategories = ["All", ...new Set(project.map((item) => item.category))];

const Project = () => {
  const [menuItems, setMenuItems] = useState(project);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category == "All") {
      setMenuItems(project);
      return;
    }
    const newItems = project.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <>
      <div>
        <Background
          title="Our Project"
          info="Home / Project"
          background={background}
        />
        <div className="project-section-container">
          <Categories filterItems={filterItems} categories={categories} />
          <Menu menuItems={menuItems} />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Project;
