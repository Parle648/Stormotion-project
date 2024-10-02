import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IPile {
  value: number;
}

const initialState: IPile = {
  value: 25,
};

const pile = createSlice({
  name: 'pile',
  initialState,
  reducers: {
    setPile(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    resetPile(state) {
      state.value = 25;
    },
  },
});

export const { setPile, resetPile } = pile.actions;
export default pile.reducer;
