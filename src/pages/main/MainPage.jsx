import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import ProductInfo from "./ProductInfo";
import { allproducts } from "../../redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import Basket from "./Basket";

function MainPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.product);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("$");
  const [selectedProduct, setSelectProduct] = useState(null);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [basket, setBasket] = useState([]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleBasketChange = (isOpen) => {
    setIsBasketOpen(isOpen);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const handleSelectProduct = (productId) => {
    const product = products.find((product) => product.id === productId);
    setSelectProduct(product);
  };

  const handleAddToBasket = (product) => {
    setBasket([...basket, product]);
    console.log(basket);
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
        basket={basket}
        isBasketOpen={isBasketOpen}
        onBasketOpenChange={handleBasketChange}
        onSelectCurrency={handleCurrencyChange}
      />

      <div
        className={`${
          selectedProduct || isBasketOpen ? "nondis" : "categoryName"
        }`}
      >
        {/* <h1 className={`${isBasketOpen ? "boldText" : "nondis"}`}>Cart</h1> */}
        <h1>{`${selectedCategory ? selectedCategory : "All Products"}`}</h1>
      </div>

      <div
        className={`mainContainer ${
          selectedProduct || isBasketOpen ? "nondis" : ""
        }`}
      >
        {filtredProduct.map((product) => (
          <Card
            key={product.id}
            name={product.title}
            price={product.price}
            image={product.gallery}
            description={product.description}
            color={product.colors}
            sizes={product.size}
            currency={selectedCurrency}
            onClick={() => handleSelectProduct(product.id)}
            onAddToBasket={handleAddToBasket}
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

      {isBasketOpen && <Basket />}
    </div>
  );
}

export default MainPage;
