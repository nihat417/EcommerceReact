import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: localStorage.getItem("token") || null,
  },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("token", action.payload);
    },
    clearToken: (state) => {
      state.value = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;
