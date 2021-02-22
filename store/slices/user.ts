import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import USER_APIS from "../../Networking/userAPIs";
import { showToastMessage } from "../../utilities/helpers";

export const fetchUserData = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const userData = await USER_APIS.getCurrentUser();

      return userData;
    } catch (e) {
      showToastMessage("danger", `Fetch User Data: ${e}`);

      return rejectWithValue(e);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: { data: {}, loading: false, error: null },
  reducers: {},
  extraReducers: {
    [fetchUserData.pending.toString()]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUserData.fulfilled.toString()]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchUserData.rejected.toString()]: (state, action) => {
      state.loading = false;
      state.error = action?.payload;
    },
  },
});

const { reducer } = userSlice;

export { reducer };
