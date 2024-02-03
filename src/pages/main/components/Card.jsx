import React from "react";
import image from '../../../assets/images/image.png'

function Cards() {
  return (
    <div className="cardComp">
      <div className="imageSec">
        <img src={image} alt="" />
      </div>
      <div className="nameCard">
        <h3>Apollo Running Short</h3>
      </div>
      <div className="priceCard">
        <h4>$50.00</h4>
      </div>
    </div>
  );
}

export default Cards;
