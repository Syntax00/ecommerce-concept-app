import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import CATEGORIES_APIS from "../../Networking/categoriesAPIs";
import { showToastMessage } from "../../utilities/helpers";

export const fetchCategories = createAsyncThunk(
  "categories/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const categories = await CATEGORIES_APIS.getAllCategories();

      return categories;
    } catch (e) {
      showToastMessage("danger", `Fetch Categories: ${e}`);

      return rejectWithValue(e);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: {
    [fetchCategories.pending.toString()]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchCategories.fulfilled.toString()]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchCategories.rejected.toString()]: (state, action) => {
      state.loading = false;
      state.error = action?.payload;
    },
  },
});

const { reducer } = categoriesSlice;

export { reducer };
