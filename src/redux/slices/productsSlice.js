import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { products: [], loading: false, error: null };

// Fetch All Products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkApi) => {
    const { rejectedWithValue } = thunkApi;
    try {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

// Delete Product
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, thunkApi) => {
    const { rejectedWithValue } = thunkApi;

    try {
      await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const insertProduct = createAsyncThunk(
  "products/insertProduct",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    // const { auth } = getState();
    // item.userId = auth.id;
    try {
      const res = await fetch(`http://localhost:5000/products`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  // Fetch All Products
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Delete Product
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = state.products.filter((el) => el.id !== action.payload);
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Insert Product
    builder.addCase(insertProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(insertProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
    });
    builder.addCase(insertProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productsSlice.reducer;
