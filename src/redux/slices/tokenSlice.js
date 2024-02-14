import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: Cookies.get("token") || null,
  },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
      Cookies.set("token", action.payload, { expires: 7 }); 
    },
    clearToken: (state) => {
      state.value = null;
      Cookies.remove("token");
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;
export const selectToken = (state) => state.token.value;

export default tokenSlice.reducer;