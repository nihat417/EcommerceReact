import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import ProductInfo from "./ProductInfo";

function MainPage() {
  return (
    <div>
      <Header />

      <div className="categoryName">
        <h1>Category name</h1>
      </div>

      <div className="mainContainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* <ProductInfo/> */}
    </div>
  );
}

export default MainPage;
