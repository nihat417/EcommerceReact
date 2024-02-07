import React from "react";
import image from "../../assets/images/image.png";

function ProductInfo() {
  return (
    <div className="infoContainer">
      <div className="infoImages">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>

      <div className="selectedImage">
        <div>
          <img src={image} alt="" />
        </div>
      </div>

      <div className="productInfo">
        <h3>Apollo</h3>
        <h2>Running Short</h2>
        <h4>SIZE:</h4>
        <div className="productSize">
          <div>XS</div>
          <div>S</div>
          <div>M</div>
          <div>L</div>
        </div>

        <h4>COLOR:</h4>
        <div className="productColor">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h5>PRICE:</h5>
        <h4>$50.00</h4>
        <button>ADD TO CART</button>
        <div className="productDescrp">
          <p>
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
