import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state: CartItem[], action: { payload: CartItem }) => {
      state.push(action.payload);
    },
    remove: (state: CartItem[]) => {
      state.pop();
    },
  },
});

const { actions, reducer } = cartSlice;

export { actions, reducer };
