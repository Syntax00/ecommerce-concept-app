import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import USER_APIS from "../../Networking/userAPIs";
import errorsMap from "../../utilities/errorsMap";
import { showToastMessage } from "../../utilities/helpers";

export const fetchUserData = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const userData = await USER_APIS.getCurrentUser();

      return userData;
    } catch (e) {
      showToastMessage(
        "danger",
        `Fetch User Data: ${errorsMap[e.status] || e.message}`
      );

      return rejectWithValue(e.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: { data: {}, loading: false, error: false },
  reducers: {},
  extraReducers: {
    [fetchUserData.pending.toString()]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchUserData.fulfilled.toString()]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchUserData.rejected.toString()]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

const { reducer } = userSlice;

export { reducer };
