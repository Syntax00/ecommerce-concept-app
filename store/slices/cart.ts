import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state: ProductType[], action: { payload: ProductType }) => {
      state.push(action.payload);
    },
    remove: (state: ProductType[]) => {
      state.pop();
    },
  },
});

const { actions, reducer } = cartSlice;

export { actions, reducer };
