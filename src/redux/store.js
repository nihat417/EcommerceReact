import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./slices/tokenSlice";
import registerReducer from "./slices/registerSlice";
import loginReducer from "./slices/loginSlice";
import productReducer from "./slices/productsSlice";
import orderReducer from "./slices/orderSlice";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: registerReducer,
    login: loginReducer,
    products: productReducer,
    order: orderReducer,
  },
});
