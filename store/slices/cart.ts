import _get from "lodash/get";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    add: (state: any, action: { payload: ProductType }) => {
      const { id: productId } = action.payload;
      if (state[productId]) return;

      state[productId] = action.payload;
    },
    remove: (state: any, action: { payload: ProductType }) => {
      const { id: productId } = action.payload;

      delete state[productId];
    },
  },
});

const { actions, reducer } = cartSlice;

export { actions, reducer };
