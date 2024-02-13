import { React, useState } from "react";

function ProductInfo({ name, brand, size, colors, image, price, description }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="infoContainer">
      <div className="infoImages">
        {image.map((imageUrl, index) => (
          <div key={index} onClick={() => handleImageClick(index)}>
            <img
              src={imageUrl}
              className={`${
                selectedImageIndex === index ? "infoimgActive" : ""
              }`}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="selectedImage">
        <div>
          <img src={image[selectedImageIndex]} alt={`Selected Image`} />
        </div>
      </div>

      <div className="productInfo">
        <h3>{name}</h3>
        <h2>{brand}</h2>
        <h4>SIZE:</h4>
        {size.length > 0 ? (
          <div className="productSize">
            {size.map((s, index) => (
              <div key={index}>{s}</div>
            ))}
          </div>
        ) : (
          <div>Not found sizes</div>
        )}

        <h4>COLOR:</h4>
        <div className="productColor">
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                color:
                  color === "White" || color === "Natural" ? "#000" : "#fff",
              }}
            >
              {color}
            </div>
          ))}
        </div>
        <h5>PRICE:</h5>
        <h4>${price}</h4>
        <button>ADD TO CART</button>
        <h4 className="descrp">Description</h4>
        <div className="productDescrp">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
