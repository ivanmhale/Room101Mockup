import React, { Component } from "react";
import One from "../assets/conspiracy/one.jpeg";
import Two from "../assets/conspiracy/two.jpeg";
import Three from "../assets/conspiracy/three.jpeg";
import Retailer from "../assets/conspiracy/retailer.jpg";

class Conspiracy extends Component {
  componentDidMount() {
    var j = 0;
    //var slideWidth =
    console.log(document.getElementById("slideshow").children);

    const autoSlide = () => {
      document.getElementById("slideshow").style.transform = `translateX(-${j *
        33.3333}%)`;
      j++;

      if (j == 3) {
        j = 0;
      }

      setTimeout(autoSlide, 3000);
    };

    autoSlide();
  }
  render() {
    return (
      <div className="section conspiracy-retailer">
        <div className="conspiracy">
          <div id="slideshow" className="slideshow">
            <div className="slide">
              <img src={One} alt="" />
              <h3>The Conspiracy</h3>
            </div>
            <div className="slide">
              <img src={Two} alt="" />
              <h3>The Conspiracy</h3>
            </div>
            <div className="slide">
              <img src={Three} alt="" />
              <h3>The Conspiracy</h3>
            </div>
          </div>
        </div>
        <div className="retailer">
          <img src={Retailer} alt="" />
          <div className="container">
            <h3>Find a retailer</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Conspiracy;
