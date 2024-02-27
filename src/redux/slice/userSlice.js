"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../api/userAPI";
export const getUserDetails = createAsyncThunk(
  "user-details",
  async (values, { dispatch, rejectWithValue }) => {
    try {
      //console.log(values, "this is id");
      const userData = await userAPI.getUser(values);
      console.log(userData?.user?._id, "this is users");
      const addreses = await userAPI.getUserAddress(userData?.user?._id);
      dispatch(setUserDetails(userData?.user));
      dispatch(setUserAddress(addreses?.addresses));
      setIsLoggedIn(true);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message, "AllProductRequestError");
        return rejectWithValue({ hasError: error.response.data.message });
      }
    }
  }
);

const initialState = {
  userDetails: null,
  isLoggedIn: false,
  userAddresses: [],
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
  },
});
export const { setUserDetails, setIsLoggedIn, setUserAddress } =
  UserSlice.actions;

export default UserSlice.reducer;
