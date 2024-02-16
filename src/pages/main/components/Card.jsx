import React, { useState, useEffect } from "react";

function Cards({
  name,
  image,
  price,
  title,
  onClick,
  onAddToBasket,
  currency,
}) {
  const handleAddToBasketClick = (event) => {
    event.stopPropagation();
    onAddToBasket({ name, image, price, title });
  };

  const convertPrice = (price) => {
    switch (currency) {
      case "$":
        return price;
      case "€":
        return (price * 0.82).toFixed(2);
      case "₼":
        return (price * 1.7).toFixed(2);
      default:
        return price;
    }
  };

  return (
    <div className="cardComp" onClick={onClick}>
      <div className="imageSec">
        {image.length > 0 && <img src={image[0]} alt={name} />}
      </div>
      <div className="buttonContainer" onClick={handleAddToBasketClick}>
        <button className="roundButton">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.4736 5.8484C23.0186 5.29247 22.3109 4.95457 21.5785 4.95457H6.19066L5.71097 3.16691C5.43262 2.12772 4.47323 1.40283 3.36082 1.40283H0.783719C0.354361 1.40283 0 1.74072 0 2.15227C0 2.56284 0.353351 2.9017 0.783719 2.9017H3.36082C3.73985 2.9017 4.06854 3.14333 4.1692 3.50577L7.25167 15.2494C7.53003 16.2886 8.48941 17.0135 9.60182 17.0135H19.6833C20.7947 17.0135 21.7808 16.2886 22.0335 15.2494L23.9286 7.80699C24.1053 7.1293 23.9543 6.40442 23.4736 5.84848L23.4736 5.8484ZM22.3879 7.46712L20.4928 14.9095C20.3921 15.272 20.0634 15.5136 19.6844 15.5136H9.60185C9.22282 15.5136 8.89413 15.272 8.79347 14.9095L6.59533 6.47717H21.5796C21.8323 6.47717 22.085 6.59798 22.237 6.79148C22.388 6.98403 22.463 7.22566 22.388 7.46729L22.3879 7.46712Z"
              fill="white"
            />
            <path
              d="M10.1332 17.978C8.69316 17.978 7.50586 19.1135 7.50586 20.4905C7.50586 21.8675 8.69326 23.0029 10.1332 23.0029C11.5733 23.0039 12.7606 21.8684 12.7606 20.4912C12.7606 19.114 11.5732 17.9778 10.1332 17.9778V17.978ZM10.1332 21.4816C9.55188 21.4816 9.09685 21.0465 9.09685 20.4906C9.09685 19.9346 9.55188 19.4995 10.1332 19.4995C10.7146 19.4995 11.1696 19.9346 11.1696 20.4906C11.1687 21.0229 10.689 21.4816 10.1332 21.4816Z"
              fill="white"
            />
            <path
              d="M18.825 17.9778C17.3849 17.9778 16.1976 19.1132 16.1976 20.4902C16.1976 21.8672 17.385 23.0027 18.825 23.0027C20.265 23.0027 21.4524 21.8672 21.4524 20.4902C21.4277 19.1141 20.265 17.9778 18.825 17.9778ZM18.825 21.4814C18.2437 21.4814 17.7886 21.0463 17.7886 20.4903C17.7886 19.9344 18.2437 19.4993 18.825 19.4993C19.4064 19.4993 19.8614 19.9344 19.8614 20.4903C19.8614 21.0227 19.3807 21.4814 18.825 21.4814Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="nameCard">
        <h3>{name}</h3>
      </div>
      <div className="priceCard">
        <h4>
          {convertPrice(price)} {currency}
        </h4>
      </div>
    </div>
  );
}

export default Cards;
