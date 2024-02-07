import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./slices/tokenSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
  },
});
