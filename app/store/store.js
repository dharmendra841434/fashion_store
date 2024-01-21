import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../slice/productSlice";
import UserReducer from "../slice/userSlice";
export const store = configureStore({
  reducer: {
    product: ProductReducer,
    user: UserReducer,
  },
});
