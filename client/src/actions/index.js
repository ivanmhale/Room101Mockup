import axios from "axios";

export const getProducts = products => async dispatch => {
  const res = await axios.get(`/products/${products}`);
  dispatch({ type: "GET_PRODUCTS", payload: res.data });
};

export const getItem = id => async dispatch => {
  const res = await axios.get(`/item/${id}`);
  dispatch({ type: "GET_ITEM", payload: res.data });
};
