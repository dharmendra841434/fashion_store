"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../api/userAPI";
export const getUserDetails = createAsyncThunk(
  "user-details",
  async (values, { dispatch, rejectWithValue }) => {
    try {
      //console.log(values, "this is id");
      const userData = await userAPI.getUser(values);
      dispatch(setUserDetails(userData?.user));
      dispatch(setCartItems(userData?.user?.cartItems));
      // console.log(userData?.user?._id, "this is users");
      const orders = await userAPI.getUserOrders(userData?.user?._id);
      // console.log(orders);
      dispatch(setUserOrders(orders?.orders));
      const addreses = await userAPI.getUserAddress(userData?.user?._id);
      console.log(addreses);
      dispatch(setUserAddress(addreses?.addresses));
      dispatch(setIsLoggedIn(true));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message, "AllProductRequestError");
        return rejectWithValue({ hasError: error.response.data.message });
      }
    }
  }
);

export const getUserOrders = createAsyncThunk(
  "user-orders",
  async (values, { dispatch, rejectWithValue }) => {
    try {
      //console.log(values, "this is id");
      const userOrders = await userAPI.getUserOrders(values);
      console.log(userOrders, "orders");
      dispatch(setUserOrders(userOrders?.orders));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message, "order request error");
        return rejectWithValue({ hasError: error.response.data.message });
      }
    }
  }
);

export const updateUserCartItems = createAsyncThunk(
  "user",
  async (values, { dispatch, rejectWithValue }) => {
    try {
      const { userId, cartItems } = values;
      //console.log(userId, cartItems, 'skudis');
      const response = await userAPI.updateUser(userId, {
        cartItems: cartItems,
      });
      // console.log(response, 'update response response');
    } catch (error) {
      if (error.response) {
        return rejectWithValue({ hasError: error.response.data.message });
      }
    }
  }
);

const initialState = {
  userDetails: null,
  isLoggedIn: false,
  userAddresses: [],
  userOrdersData: [],
  cartItems: [],
  totalPrice: 0,
};
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUserAddress: (state, action) => {
      state.userAddresses = action.payload;
    },
    setUserOrders: (state, action) => {
      state.userOrdersData = action.payload;
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});
export const {
  setUserDetails,
  setIsLoggedIn,
  setUserAddress,
  setUserOrders,
  setCartItems,
  setTotalPrice,
} = UserSlice.actions;

export default UserSlice.reducer;
