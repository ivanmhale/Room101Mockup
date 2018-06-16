import React, { Component } from "react";
import Hero from "../assets/heroes/hero_5.jpg";
import { connect } from "react-redux";
import { getItem } from "../actions";

class Item extends Component {
  componentDidMount() {
    const item_id = window.location.href.replace(/^.*\/\/[^\/]+/, '').slice(6);
    this.props.getItem(item_id);
  }
  render() {
    const item = this.props.item;
    console.log(item);
    return (
      <div className="item_container">
        <div className="head">
          <img src={Hero} alt="" />
          <h1>{item.category}</h1>
        </div>
        <div className="item_showcase">
          <img src={item.imageUrl} alt="" />
          <h1>{item.name}</h1>
          <h3>
            <i>${item.price}</i>
          </h3>
          <p>{item.description}</p>
          <h4>SKU: {item.sku}</h4>
          <h4 className="select">
            Size:{" "}
            <select name="" id="">
              <option value="">--please choose a size--</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
              <option value="">11</option>
              <option value="">12</option>
            </select>
          </h4>
          <h4 className="select">
            Quantity:{" "}
            <select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
              <option value="">11</option>
              <option value="">12</option>
              <option value="">13</option>
              <option value="">14</option>
              <option value="">15</option>
              <option value="">16</option>
              <option value="">17</option>
              <option value="">18</option>
              <option value="">19</option>
              <option value="">20</option>
              <option value="">21</option>
              <option value="">22</option>
              <option value="">23</option>
              <option value="">24</option>
              <option value="">25</option>
              <option value="">26</option>
              <option value="">27</option>
              <option value="">28</option>
              <option value="">29</option>
              <option value="">30</option>

            </select>
          </h4>
          <div className="button_container">
            <button>Add to Bag</button>
            <button>Add to Wishlist</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItem: id => dispatch(getItem(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
