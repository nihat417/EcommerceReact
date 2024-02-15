import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const allproducts = createAsyncThunk("products/fetch", async (_) => {
  try {
    const response = await fetch("http://localhost:5000/api/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.product;
  } catch (error) {
    throw error;
  }
});



const productsSlice = createSlice({
  name: "products",
  initialState: {
    product: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(allproducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(allproducts.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(allproducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
