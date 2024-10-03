import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IOponentManchStick {
  value: number;
}

const initialState: IOponentManchStick = {
  value: 0,
};

const oponentMatchsticks = createSlice({
  name: 'oponentMatchsticks',
  initialState,
  reducers: {
    setOponentMatchsticks(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    resetOponentMatchsticks(state) {
      state.value = 0;
    },
  },
});

export const { setOponentMatchsticks, resetOponentMatchsticks } = oponentMatchsticks.actions;
export default oponentMatchsticks.reducer;
