import React, { Component } from "react";
import "./Style.css";
import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png";

export default class Review extends Component {
  render() {
    return (
      <div>
        {/* <!-- review section starts  --> */}

        <section className="review" id="review">
          <h1 className="heading">
            customer's <span>review</span>
          </h1>

          <div className="box-container">
            <div className="box">
              <img src={pic1} alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Fugiat, quos eum. Laborum aut a consequatur ducimus, molestias
                possimus quisquam rerum temporibus ipsum voluptate accusamus,
                unde ab asperiores? Exercitationem, unde rem.
              </p>
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>

            <div className="box">
              <img src={pic2} alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Fugiat, quos eum. Laborum aut a consequatur ducimus, molestias
                possimus quisquam rerum temporibus ipsum voluptate accusamus,
                unde ab asperiores? Exercitationem, unde rem.
              </p>
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-alt"></i>
              </div>
            </div>

            <div className="box">
              <img src={pic3} alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Fugiat, quos eum. Laborum aut a consequatur ducimus, molestias
                possimus quisquam rerum temporibus ipsum voluptate accusamus,
                unde ab asperiores? Exercitationem, unde rem.
              </p>
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- review section ends --> */}
      </div>
    );
  }
}
