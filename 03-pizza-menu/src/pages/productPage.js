import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./js/header";
import Footer from "./js/footer";
import "./css/resets.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>,
);


reportWebVitals();
