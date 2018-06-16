import React, { Component } from "react";
import { getProducts } from "../actions";
import { connect } from "react-redux";
import Hero from "../assets/heroes/hero_5.jpg";

class Catalog extends Component {
  componentDidMount() {
    const category = window.location.href.replace(/^.*\/\/[^\/]+/, '').slice(10);
    switch (category) {
      case "rings":
        this.props.getProducts("rings");
        break;
      case "beads":
        this.props.getProducts("beads");
        break;
      case "pendants":
        this.props.getProducts("pendants");
        break;
      case "cufflinks":
        this.props.getProducts("cufflinks");
        break;
      case "custom":
        this.props.getProducts("custom");
        break;
      default:
    }
  }
  renderItems() {
    return this.props.products.map(product => {
      return (
        <a key={product._id} href={`/item/${product._id}`}>
          <div className="catalog_item">
            <img src={product.imageUrl} alt="" />
            <p>{product.name}</p>
            <p>
              <i>${product.price}</i>
            </p>
          </div>
        </a>
      );
    });
  }
  render() {
    return (
      <div className="catalog_container">
        <div className="head">
          <img src={Hero} alt="" />
          <h1>{window.location.href.slice(31)}</h1>
        </div>
        <div className="catalog">{this.renderItems()}</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: product => dispatch(getProducts(product))
  };
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
