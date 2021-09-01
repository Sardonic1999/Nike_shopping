import React, { Component } from "react";
import "./Style.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* <!-- newsletter section starts  --> */}

        <section className="newsletter">
          <div className="content">
            <h3>monthly newsletter</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              ullam veniam at itaque culpa hic corporis saepe dicta doloremque
              nihil.
            </p>
            <form action="">
              <input
                type="email"
                placeholder="enter your email"
                className="box"
              />
              <input type="submit" value="send" className="btn" />
            </form>
          </div>
        </section>

        {/* <!-- newsletter section ends --> */}

        {/* <!-- footer section  --> */}

        <section className="footer">
          <div className="box-container">
            <div className="box">
              <h3>our stores</h3>
              <a href="#">india</a>
              <a href="#">USA</a>
              <a href="#">japan</a>
              <a href="#">paris</a>
            </div>

            <div className="box">
              <h3>quick links</h3>
              <a href="#">home</a>
              <a href="#">products</a>
              <a href="#">featured</a>
              <a href="#">review</a>
            </div>

            <div className="box">
              <h3>extra links</h3>
              <a href="#">my account</a>
              <a href="#">my favorite</a>
              <a href="#">my orders</a>
              <a href="#">newsletter</a>
            </div>

            <div className="box">
              <h3>follow us</h3>
              <a href="#">facebook</a>
              <a href="#">twitter</a>
              <a href="#">instagram</a>
              <a href="#">linkedin</a>
            </div>

            <div className="credit">
              created by <span> Sardonic</span> | all rights reserved
            </div>
          </div>
        </section>
      </div>
    );
  }
}
