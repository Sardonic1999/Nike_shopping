import React, { Component } from "react";
import "./Style.css";
import f1 from "./images/f-img-1.1.png";
import f2 from "./images/f-img-1.2.png";
import f3 from "./images/f-img-1.3.png";
import f4 from "./images/f-img-1.4.png";
import f21 from "./images/f-img-2.1.png";
import f22 from "./images/f-img-2.2.png";
import f23 from "./images/f-img-2.3.png";
import f24 from "./images/f-img-2.4.png";
import f31 from "./images/f-img-3.1.png";
import f32 from "./images/f-img-3.2.png";
import f33 from "./images/f-img-3.3.png";
import f34 from "./images/f-img-3.4.png";

export default class Featured extends Component {
  render() {
    return (
      <div>
        {/* <!-- featured section starts  --> */}

        <section className="featured" id="featured">
          <h1 className="heading">
            <span>featured</span> products
          </h1>

          <div className="row">
            <div className="image-container">
              <div className="small-image">
                <img src={f1} className="featured-image-1" alt="" />
                <img src={f2} className="featured-image-1" alt="" />
                <img src={f3} className="featured-image-1" alt="" />
                <img src={f4} className="featured-image-1" alt="" />
              </div>
              <div className="big-image">
                <img src={f1} className="big-image-1" alt="" />
              </div>
            </div>
            <div className="content">
              <h3>new nike airmax shoes</h3>
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                facilis praesentium odit voluptas illum iure libero quis fuga
                commodi. Autem.
              </p>
              <div className="price">
                $80.99 <span>$120.99</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>

          <div className="row">
            <div className="image-container">
              <div className="small-image">
                <img src={f21} className="featured-image-2" alt="" />
                <img src={f22} className="featured-image-2" alt="" />
                <img src={f23} className="featured-image-2" alt="" />
                <img src={f24} className="featured-image-2" alt="" />
              </div>
              <div className="big-image">
                <img src={f21} className="big-image-2" alt="" />
              </div>
            </div>
            <div className="content">
              <h3>new nike airmax shoes</h3>
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                facilis praesentium odit voluptas illum iure libero quis fuga
                commodi. Autem.
              </p>
              <div className="price">
                $80.99 <span>$120.99</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>

          <div className="row">
            <div className="image-container">
              <div className="small-image">
                <img src={f31} className="featured-image-3" alt="" />
                <img src={f32} className="featured-image-3" alt="" />
                <img src={f33} className="featured-image-3" alt="" />
                <img src={f34} className="featured-image-3" alt="" />
              </div>
              <div className="big-image">
                <img src={f31} className="big-image-3" alt="" />
              </div>
            </div>
            <div className="content">
              <h3>new nike airmax shoes</h3>
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                facilis praesentium odit voluptas illum iure libero quis fuga
                commodi. Autem.
              </p>
              <div className="price">
                $80.99 <span>$120.99</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
        </section>

        {/* <!-- featured section ends --> */}
      </div>
    );
  }
}
