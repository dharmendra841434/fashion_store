"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productAPI } from "../api/productAPI";

export const allProductsRequest = createAsyncThunk(
  "products-list",
  async (values, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setListLoader(true));
      const productsData = await productAPI.getAllProduct();
      //  console.log(productsData, "all list");
      let tshirt = productsData.data;
      let filtered = tshirt.filter((item, index) => item.type === "t-shirt");
      // console.log(filtered, "filtered");
      dispatch(setProductList(tshirt));
      dispatch(setfiltredList(filtered));
      dispatch(setListLoader(false));
    } catch (error) {
      if (error.response) {
        dispatch(setAllGameLoading(false));
        console.log(error.response.data.message, "AllProductRequestError");
        return rejectWithValue({ hasError: error.response.data.message });
      }
    }
  }
);

const initialState = {
  productListLoader: false,
  productList: [],
  filteredProductList: [],
};
export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    setfiltredList: (state, action) => {
      state.filteredProductList = action.payload;
    },
    setListLoader: (state, action) => {
      state.productListLoader = action.payload;
    },
  },
});
export const { setProductList, setListLoader, setfiltredList } =
  ProductSlice.actions;

export default ProductSlice.reducer;
