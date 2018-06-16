import { combineReducers } from "redux";
import products from "./products";
import item from "./item";

const rootReducer = combineReducers({
  products,
  item
});
export default rootReducer;
