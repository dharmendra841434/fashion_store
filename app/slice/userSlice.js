import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../api/userAPI";

export const getUserDetails = createAsyncThunk(
  "user-details",
  async (values, { dispatch, rejectWithValue }) => {
    try {
      //console.log(values, "this is id");
      const userData = await userAPI.getUser(values);
      // console.log(userData, "this is users");
      dispatch(setUserDetails(userData));
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
  },
});
export const { setUserDetails, setIsLoggedIn } = UserSlice.actions;

export default UserSlice.reducer;
