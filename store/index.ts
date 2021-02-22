import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as AddressesReducer } from "./slices/addresses";
import { reducer as CartReducer } from "./slices/cart";
import { reducer as CategoriesReducer } from "./slices/categories";
import { reducer as UserReducer } from "./slices/user";

const rootReducer = combineReducers({
  addresses: AddressesReducer,
  cart: CartReducer,
  categories: CategoriesReducer,
  user: UserReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
