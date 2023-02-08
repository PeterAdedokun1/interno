import React from "react";
const Categories = ({ filterItems, categories }) => {
  return (
    <div className="project-btns-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
