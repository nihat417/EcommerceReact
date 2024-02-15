import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { selectToken } from "./tokenSlice";

export const userOrders = createAsyncThunk(
  "orders",
  async ({ orders }, thunkApi) => {
    try {
      const token = selectToken(thunkApi.getState());
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ orderItems: orders }),
      });
      if (!response.ok) {
        throw new Error("Failed to place order");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const getOrder = createAsyncThunk(
  "orders/getOrder",
  async (_, thunkApi) => {
    try {
      const token = selectToken(thunkApi.getState());
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to get orders");
      }

      const data = await response.json();
      console.log(data.orderItems);
      return data.orderItems;
    } catch (error) {
      throw error;
    }
  }
);

const orderSlice = createSlice({
  name: "orderitem",
  initialState: {
    loading: false,
    error: null,
    orders: [],
  },
  reducers: {
    addOrder(state, action) {
      state.orders.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(userOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
