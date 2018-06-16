import React, { Component } from "react";
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
          Explore our most versatile items: the latest bead and shamballa
          bracelet designs.
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
          All our rings are handcrafted, and come in a variety of designs and
          materials.
        </p>
        <button>Shop Now</button>
        <p>See terms & conditions for details</p>
      </div>
      <img src={hero4} alt="" />
    </div>
  );
};

class Carousel extends Component {
  state = {
    stop: false
  };
  componentDidMount() {
    var bulletsItems = document.getElementsByClassName("bullet");
    var i;
    var j = 0;

    const autoSlide = () => {
      if (this.state.stop) return;

      document.getElementById("carousel").style.transform = `translateX(-${j *
        100}vw)`;

      bulletsItems[j].children[0].style.backgroundColor = "#daa520";

      var k;

      for (k = 0; k < bulletsItems.length; k++) {
        if (k !== j) {
          bulletsItems[k].children[0].style.backgroundColor = "#707070";
        }
      }

      j++;
      if (j === 4) {
        j = 0;
      }

      setTimeout(autoSlide, 3000);
    };

    autoSlide();

    for (i = 0; i < bulletsItems.length; i++) {
      bulletsItems[i].addEventListener("click", e => {
        this.setState({ stop: true });

        var h;
        for (h = 0; h < bulletsItems.length; h++) {
          bulletsItems[h].children[0].style.backgroundColor = "#707070";
        }

        bulletsItems[e.path[1].id].children[0].style.backgroundColor =
          "#daa520";

        document.getElementById("carousel").style.transform = `translateX(-${e
          .path[1].id * 100}vw)`;

        setTimeout(() => {
          j = parseInt(e.path[1].id, 10) + 1;
          if (j === 4) j = 0;
          this.setState({ stop: false });
          autoSlide();
        }, 6000);
      });
    }
  }

  render() {
    return (
      <div className="section carousel-container">
        <div id="carousel" className="carousel">
          <div>{slide1()}</div>
          <div>{slide2()}</div>
          <div>{slide3()}</div>
          <div>{slide4()}</div>
        </div>

        <ul id="bullets" className="bullets">
          <li id="0" className="bullet">
            <div className="square" />
          </li>

          <li id="1" className="bullet">
            <div className="square" />
          </li>

          <li id="2" className="bullet">
            <div className="square" />
          </li>

          <li id="3" className="bullet">
            <div className="square" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Carousel;
