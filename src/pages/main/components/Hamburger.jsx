import React from "react";

function Hamburger() {
  return (
    <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
        </label>

        <ul className="menu__box">
            <li><a className="menu__item">Home</a></li>
            <li><a className="menu__item">Women</a></li>
            <li><a className="menu__item">Men</a></li>
            <li><a className="menu__item">Kids</a></li>
        </ul>
    </div>
  );
};

export default Hamburger;
