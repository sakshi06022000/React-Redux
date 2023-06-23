import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      debugger;
      console.log("teh sate is ", state, " ans acion ", action.payload);
      const { headers, config, request, ...rest } = action.payload;
      state.data = rest;
    },
  },
});

export const { fetchProducts } = productSlice.actions;

export default productSlice.reducer;

export function getProducts() {
  return async function getProductsThunk(dispatch, getState) {
    // const data = await fetch("https://fakestoreapi.com/products");
    // const result = await data.json;
    // console.log("RRRq222 ", result);
    // dispatch(fetchProducts(result));
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log("RRRq222 ", result);
    // debugger;
    if (result) {
      dispatch(fetchProducts(result));
    }
    //   .then((result) => getProducts(result));
  };
}
