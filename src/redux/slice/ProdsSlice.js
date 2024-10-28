import { createSlice } from '@reduxjs/toolkit';

const ProductsSlice = createSlice({
  name: 'ProductsSlice',
  initialState: {
    product: []
  },
  reducers: {
    ProductsSet: (state, action) => {
			state.product = action.payload;
		},
		CostAscSet: (state, action) => {
			state.product = state.product.sort((a, b) => a.cost - b.cost);
    },
    CostDesSet: (state, action) => {
			state.product = state.product.sort((a, b) => b.cost - a.cost);
    }
  },
});

export const { ProductsSet, CostAscSet, CostDesSet } = ProductsSlice.actions;
export default ProductsSlice.reducer;