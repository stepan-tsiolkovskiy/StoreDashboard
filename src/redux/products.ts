import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataType } from "../types";
import { fetchData } from "../api";

export type ProductsState = {
  products: DataType;
  loading: boolean;
  error: string;
};

const initialState: ProductsState = {
  products: {
    electronics: [],
    homeGoods: [],
    clothing: [],
  },
  loading: false,
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.products = action.payload.data;
      state.loading = false;
      state.error = 'Error'
    })
  }
});

export default productsSlice.reducer;

export const init = createAsyncThunk('products/fetch', () => {
  return fetchData();
})