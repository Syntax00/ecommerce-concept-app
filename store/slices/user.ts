import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import USER_APIS from "../../Networking/userAPIs";

export const fetchUserData = createAsyncThunk(
  "user/getUser",
  async () => await USER_APIS.getCurrentUser()
);

const userSlice = createSlice({
  name: "user",
  initialState: { data: {}, loading: false, error: false },
  reducers: {},
  extraReducers: {
    [fetchUserData.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchUserData.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchUserData.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

const { reducer } = userSlice;

export { reducer };
