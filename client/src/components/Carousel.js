import React from "react";

import hero1 from "../assets/heroes/hero_1.jpg";
import hero2 from "../assets/heroes/hero_2.jpg";
import hero3 from "../assets/heroes/hero_3.jpg";
import hero4 from "../assets/heroes/hero_4.jpg";

const slide1 = () => {
  return (
    <div className="slide">
      <div className="words">
        <h3>Father's Day Sale</h3>
        <p>
          Use code FATHERSDAY30 at checkout for 30% off your entire order
          (certain exclusions apply)
        </p>
        <button>Shop Now</button>
        <p>See terms & conditions for details</p>
      </div>
      <img src={hero1} alt="" />
    </div>
  );
};

const slide2 = () => {
  return (
    <div className="slide">
      <div className="words">
        <h3>New Designs</h3>
        <p>
          Discover our newest designs to find the perfect piece for your style!
        </p>
        <button>Shop Now</button>
        <p>See terms & conditions for details</p>
      </div>
      <img src={hero2} alt="" />
    </div>
  );
};

const slide3 = () => {
  return (
    <div className="slide">
      <div className="words">
        <h3>Bead Bracelets</h3>
        <p>
          Explore our most versatile items: the latest bead and shamballa bracelet designs.
        </p>
        <button>Shop Now</button>
        <p>See terms & conditions for details</p>
      </div>
      <img src={hero3} alt="" />
    </div>
  );
};

const slide4 = () => {
  return (
    <div className="slide">
      <div className="words">
        <h3>Rings</h3>
        <p>
          All our rings are handcrafted, and come in a variety of designs and materials.
        </p>
        <button>Shop Now</button>
        <p>See terms & conditions for details</p>
      </div>
      <img src={hero4} alt="" />
    </div>
  );
};

const Carousel = () => {
  return (
    <div className="section carousel-container">
      <div className="carousel">
        <div>{slide1()}</div>
        <div>{slide2()}</div>
        <div>{slide3()}</div>
        <div>{slide4()}</div>
      </div>

      <div className="bullets">
        <div className="bullet">
          <div className="square" />
        </div>

        <div className="bullet">
          <div className="square" />
        </div>

        <div className="bullet">
          <div className="square" />
        </div>

        <div className="bullet">
          <div className="square" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
