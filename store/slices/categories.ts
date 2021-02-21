import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import CATEGORIES_APIS from "../../Networking/categoriesAPIs";
import errorsMap from "../../utilities/errorsMap";
import { showToastMessage } from "../../utilities/helpers";

export const fetchCategories = createAsyncThunk(
  "categories/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const categories = await CATEGORIES_APIS.getAllCategories();

      return categories;
    } catch (e) {
      showToastMessage("danger", `Fetch Categories: ${errorsMap[e.status] || e.message}`);

      return rejectWithValue(e.response.data);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: { data: [], loading: false, error: false },
  reducers: {},
  extraReducers: {
    [fetchCategories.pending.toString()]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchCategories.fulfilled.toString()]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchCategories.rejected.toString()]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

const { reducer } = categoriesSlice;

export { reducer };
