import { createSlice } from '@reduxjs/toolkit';

const EnqSlice = createSlice({
  name: 'EnqSlice',
  initialState: {
    product: []
  },
  reducers: {
    EnqSet: (state, action) => {
			state.enq = action.payload;
		},
  },
});

export const { EnqSet } = EnqSlice.actions;
export default EnqSlice.reducer;