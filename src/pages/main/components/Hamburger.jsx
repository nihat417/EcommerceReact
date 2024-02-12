import React from "react";

function Hamburger({ selectedCategory, onSelectCategory }) {
  const handleSelectedCategory = (category) => {
    onSelectCategory(category);
  };

  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className="menu__box">
        <li>
          <a
            className={`menu__item ${
              selectedCategory === "Cars" ? "menu__item__active" : "menu__item__text"
            }`}
            onClick={() => handleSelectedCategory("Cars")}
          >
            Cars
          </a>
        </li>
        <li>
          <a
            className={`menu__item ${
              selectedCategory === "Clothing" ? "menu__item__active" : "menu__item__text"
            }`}
            onClick={() => handleSelectedCategory("Clothing")}
          >
            Clothing
          </a>
        </li>
        <li>
          <a
            className={`menu__item ${
              selectedCategory === "Tech" ? "menu__item__active" : "menu__item__text"
            }`}
            onClick={() => handleSelectedCategory("Tech")}
          >
            Tech
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Hamburger;
