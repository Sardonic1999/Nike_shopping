import React, { Component } from "react";
import "./Style.css";
import shoe1 from "./images/home-shoe-1.png";
import text1 from "./images/home-text-1.png";
import shoe2 from "./images/home-shoe-2.png";
import text2 from "./images/home-text-2.png";
import shoe3 from "./images/home-shoe-3.png";
import text3 from "./images/home-text-3.png";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <!-- home section starts  --> */}

        <section className="home" id="home">
          <div className="slide-container active">
            <div className="slide">
              <div className="content">
                <span>nike red shoes</span>
                <h3>nike metcon shoes</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat maiores et eos eaque veritatis aut laboriosam earum
                  dolorem iste atque.
                </p>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
              <div className="image">
                <img src={shoe1} className="shoe" alt="" />
                <img src={text1} className="text" alt="" />
              </div>
            </div>
          </div>

          <div className="slide-container">
            <div className="slide">
              <div className="content">
                <span>nike blue shoes</span>
                <h3>nike metcon shoes</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat maiores et eos eaque veritatis aut laboriosam earum
                  dolorem iste atque.
                </p>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
              <div className="image">
                <img src={shoe2} className="shoe" alt="" />
                <img src={text2} className="text" alt="" />
              </div>
            </div>
          </div>

          <div className="slide-container">
            <div className="slide">
              <div className="content">
                <span>nike yellow shoes</span>
                <h3>nike metcon shoes</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat maiores et eos eaque veritatis aut laboriosam earum
                  dolorem iste atque.
                </p>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
              <div className="image">
                <img src={shoe3} className="shoe" alt="" />
                <img src={text3} className="text" alt="" />
              </div>
            </div>
          </div>

          <div id="prev" className="fa fa-chevron-left" onclick="prev()"></div>
          <div id="next" className="fa fa-chevron-right" onclick="next()"></div>
        </section>

        {/* <!-- home section ends --> */}
      </div>
    );
  }
}
