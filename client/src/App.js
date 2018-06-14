import React, { Component } from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Collections from "./components/Collections";
import Newsletter from "./components/Newsletter";
import Conspiracy from "./components/Conspiracy";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h4 style={{margin: "3rem auto", width: "80%"}}>This is a non-commercial mockup, with more features to be added. The official Room101 website can be visited <a href="https://room101brand.com/">here</a>.</h4>
        <Carousel />
        <Collections />
        <Newsletter />
        <Conspiracy />
        <Footer />
      </div>
    );
  }
}

export default App;
