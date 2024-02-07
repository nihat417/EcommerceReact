import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./slices/tokenSlice";
import registerReducer from "./slices/registerSlice";
import loginReducer from "./slices/loginSlice";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: registerReducer,
    login: loginReducer,
  },
});
