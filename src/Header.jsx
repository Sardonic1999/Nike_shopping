import React, { Component } from "react";
import "./Style.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        {/* <!-- header section starts  --> */}

        <header>
          <div id="menu-bar" className="fa fa-bars"></div>

          <a href="#" className="logo">
            nike
          </a>

          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#featured">Featured</a>
            <a href="#review">Review</a>
          </nav>

          <div className="icons">
            <a href="#" className="fa fa-heart"></a>
            <a href="#" className="fa fa-shopping-cart"></a>
            <a href="#" className="fa fa-user"></a>
          </div>
        </header>

        {/* <!-- header section ends --> */}
      </div>
    );
  }
}
