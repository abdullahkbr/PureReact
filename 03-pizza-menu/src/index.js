import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./js/header";
import Hero from "./js/hero";
import Product from "./js/product";
import ProductSecondary from "./js/product-secondary";
import Footer from "./js/footer";
import "./index.css";
import "./css/resets.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Product />
    <ProductSecondary />
    <Product />
    <Footer />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
