import React, { Component } from "react";
import "./Style.css";
import pro1 from "./images/product-1.png";
import pro2 from "./images/product-2.png";
import pro3 from "./images/product-3.png";
import pro4 from "./images/product-4.png";
import pro5 from "./images/product-5.png";
import pro6 from "./images/product-6.png";

export default class Product extends Component {
  render() {
    return (
      <div>
        <section className="products" id="products">
          <h1 className="heading">
            latest <span>products</span>
          </h1>

          <div className="box-container">
            <div className="box">
              <div className="icons">
                <a href="#" className="fa fa-heart"></a>
                <a href="#" className="fa fa-share"></a>
                <a href="#" className="fa fa-eye"></a>
              </div>
              <img src={pro1} alt="" />
              <div className="content">
                <h3>nike shoes</h3>
                <div className="price">
                  $120.99 <span>$150.99</span>
                </div>
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                <a href="#" className="fa fa-heart"></a>
                <a href="#" className="fa fa-share"></a>
                <a href="#" className="fa fa-eye"></a>
              </div>
              <img src={pro2} alt="" />

              <div className="content">
                <h3>nike shoes</h3>
                <div className="price">
                  $120.99 <span>$150.99</span>
                </div>
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                <a href="#" className="fa fa-heart"></a>
                <a href="#" className="fa fa-share"></a>
                <a href="#" className="fa fa-eye"></a>
              </div>
              <img src={pro3} alt="" />
              <div className="content">
                <h3>nike shoes</h3>
                <div className="price">
                  $120.99 <span>$150.99</span>
                </div>
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                <a href="#" className="fa fa-heart"></a>
                <a href="#" className="fa fa-share"></a>
                <a href="#" className="fa fa-eye"></a>
              </div>
              <img src={pro4} alt="" />
              <div className="content">
                <h3>nike shoes</h3>
                <div className="price">
                  $120.99 <span>$150.99</span>
                </div>
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                <a href="#" className="fa fa-heart"></a>
                <a href="#" className="fa fa-share"></a>
                <a href="#" className="fa fa-eye"></a>
              </div>
              <img src={pro5} alt="" />
              <div className="content">
                <h3>nike shoes</h3>
                <div className="price">
                  $120.99 <span>$150.99</span>
                </div>
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                <a href="#" className="fa fa-heart"></a>
                <a href="#" className="fa fa-share"></a>
                <a href="#" className="fa fa-eye"></a>
              </div>
              <img src={pro6} alt="" />
              <div className="content">
                <h3>nike shoes</h3>
                <div className="price">
                  $120.99 <span>$150.99</span>
                </div>
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
