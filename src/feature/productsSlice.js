import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  stats: {
    totalProducts: 0,
    totalValue: 0,
    outOfStock: 0,
    categories: 0,
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      state.stats = calculateStats(action.payload);
    },
    editProduct(state, action) {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
        state.stats = calculateStats(state.products);
      }
    },
    deleteProduct(state, action) {
      state.products = state.products.filter((p) => p.id !== action.payload);
      state.stats = calculateStats(state.products);
    },
    disableProduct(state, action) {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) product.disabled = true;
      state.stats = calculateStats(state.products);
    },
  },
});

const calculateStats = (products) => {
  console.log(products, "products");
  const totalProducts = products.length;
  const totalValue = products.reduce(
    (sum, p) => sum + parseInt(p.price.slice(1)) * parseInt(p.quantity),
    0
  );
  const outOfStock = products.filter((p) => p.quantity === 0).length;
  const categories = new Set(products.map((p) => p.category)).size;
  return { totalProducts, totalValue, outOfStock, categories };
};

export const { setProducts, editProduct, deleteProduct, disableProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
