import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import Service from "./Service";
import Product from "./Product";
import Featured from "./Featured";
import Review from "./Review";
import Footer from "./Footer";

export default class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Service />
        <Product />
        <Featured />
        <Review />
        <Footer />
      </div>
    );
  }
}
