import _get from "lodash/get";
import { createSlice } from "@reduxjs/toolkit";

const addressesSlice = createSlice({
  name: "addresses",
  initialState: [],
  reducers: {
    add: (state: any, action: { payload: object }) => {
      state.push(action.payload);
    },
  },
});

const { actions, reducer } = addressesSlice;

export { actions, reducer };
