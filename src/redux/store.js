import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authSlice,
  },
});

export default store;
