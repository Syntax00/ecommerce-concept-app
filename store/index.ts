import { configureStore } from "@reduxjs/toolkit";
import { reducer as CartReducer } from "./slices/cart";

const store = configureStore({
  reducer: CartReducer,
});

export default store;
