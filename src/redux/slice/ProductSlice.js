import { createSlice } from '@reduxjs/toolkit';

const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState: { },
  reducers: {
    prodSet: (state, action) => {
			state.prod = action.payload;
		},
  },
});

export const { prodSet } = ProductSlice.actions;
export default ProductSlice.reducer;