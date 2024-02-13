import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import ProductInfo from "./ProductInfo";
// import mainloading from "../other/loading/mainloading"

import { allproducts } from "../../redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import Basket from "./Basket";

function MainPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.product);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectProduct] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSelectProduct = (productId) => {
    const product = products.find((product) => product.id === productId);
    setSelectProduct(product);
  };

  useEffect(() => {
    dispatch(allproducts());
  }, [dispatch]);

  const filtredProduct = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  if (loading) return <div>loading ... </div>;

  if (error) return <div>Error : {error}</div>;

  return (
    <div>
      <Header
        onCategorySelect={handleSelectCategory}
        onselectedProduct={handleSelectProduct}
      />

      <Basket />

      {/* categoryName */}
      <div className={`${selectedProduct ? "nondis" : "nondis"}`}>
        <h1>{`${selectedCategory ? selectedCategory : "All Products"}`}</h1>
      </div>

      <div className={`mainContainer ${selectedProduct ? "nondis" : "nondis"}`}>
        {filtredProduct.map((product) => (
          <Card
            key={product.id}
            name={product.title}
            price={product.price}
            image={product.gallery}
            onClick={() => handleSelectProduct(product.id)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductInfo
          key={selectedProduct.id}
          name={selectedProduct.title}
          price={selectedProduct.price}
          image={selectedProduct.gallery}
          brand={selectedProduct.brand}
          size={selectedProduct.size}
          colors={selectedProduct.colors}
          description={selectedProduct.description}
        />
      )}
    </div>
  );
}

export default MainPage;
