import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import CATEGORIES_APIS from "../../Networking/categoriesAPIs";

export const fetchCategories = createAsyncThunk(
  "categories/getAll",
  async () => await CATEGORIES_APIS.getAllCategories()
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: { data: [], loading: false, error: false },
  reducers: {},
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchCategories.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

const { reducer } = categoriesSlice;

export { reducer };
