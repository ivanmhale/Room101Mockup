import React, { Component } from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Collections from "./components/Collections";
import Catalog from "./components/Catalog";
import Item from './components/Item';
import Newsletter from "./components/Newsletter";
import Conspiracy from "./components/Conspiracy";
import Footer from "./components/Footer";

const Landing = () => {
  return (
    <div className="">
      <Carousel />
      <Collections />
      <Newsletter />
      <Conspiracy />
    </div>
  );
};

class App extends Component {
  renderPage() {
    if (window.location.href.indexOf("products") !== -1) {
      return <Catalog />;
    } else if (window.location.href.indexOf("item") !== -1) {
      return <Item />;
    } else{
    return <Landing />
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <h4 style={{ margin: "3rem auto", width: "80%" }}>
          This is a non-commercial mockup, with more features to be added. The
          official Room101 website can be visited{" "}
          <a href="https://room101brand.com/">here</a>.
        </h4>
        {this.renderPage()}
        <Footer />
      </div>
    );
  }
}

export default App;
