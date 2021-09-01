import React, { Component } from "react";
import "./Style.css";

export default class Service extends Component {
  render() {
    return (
      <div>
        {/* <!-- service section starts  --> */}

        <section className="service">
          <div className="box-container">
            <div className="box">
              <i className="fa fa-shipping-fast"></i>
              <h3>fast delivery</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
                fugit.
              </p>
            </div>

            <div className="box">
              <i className="fa fa-undo"></i>
              <h3>10 days replacements</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
                fugit.
              </p>
            </div>

            <div className="box">
              <i className="fa fa-headset"></i>
              <h3>24 x 7 support</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
                fugit.
              </p>
            </div>
          </div>
        </section>

        {/* <!-- service section ends --> */}
      </div>
    );
  }
}
