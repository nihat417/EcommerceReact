import React from "react";

function ProductInfo({ name, brand, size, colors, image, price, description }) {
  return (
    <div className="infoContainer">
      <div className="infoImages">
        {image.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="selectedImage">
        <div>
          <img src={image[0]} alt={`Selected Image`} />
        </div>
      </div>

      <div className="productInfo">
        <h3>{name}</h3>
        <h2>{brand}</h2>
        <h4>SIZE:</h4>
        <div className="productSize">
          {size.map((s, index) => (
            <div key={index}>{s}</div>
          ))}
        </div>

        <h4>COLOR:</h4>
        <div className="productColor">
          {colors.map((color, index) => (
            <div key={index}>{color}</div>
          ))}
        </div>
        <h5>PRICE:</h5>
        <h4>${price}</h4>
        <button>ADD TO CART</button>
        <div className="productDescrp">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
