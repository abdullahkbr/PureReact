import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Hero from "./hero";
import Product from "./pages/product";
import ProductSecondary from "./pages/product-secondary";
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
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
