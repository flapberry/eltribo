import { configureStore } from '@reduxjs/toolkit';
import ProdS from './slice/ProductSlice.js'
import ProdsS from './slice/ProdsSlice.js';
import ProductS from './slice/admin/ProductSlice.js';
import EnqS from './slice/form/EnqSlice.js';

const store = configureStore({
	reducer: {
		ProdS,
		ProdsS,
		prodR: ProductS,
		EnqS
  },
});

export default store;
