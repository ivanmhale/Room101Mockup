import React, { Component } from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Collections from "./components/Collections";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel />
        <Collections />
        <Newsletter />
        <Footer />
      </div>
    );
  }
}

export default App;
