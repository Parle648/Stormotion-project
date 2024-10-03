import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ITakeUpTo {
  value: number;
}

const initialState: ITakeUpTo = {
  value: 3,
};

const takeUpTo = createSlice({
  name: 'takeUpTo',
  initialState,
  reducers: {
    setTakeUpTo(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    resetTakeUpTo(state) {
      state.value = 3;
    },
  },
});

export const { setTakeUpTo, resetTakeUpTo } = takeUpTo.actions;
export default takeUpTo.reducer;
