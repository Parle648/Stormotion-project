import { createSlice } from '@reduxjs/toolkit';

interface IToStart {
  value: 'first' | 'second';
}

const initialState: IToStart = {
  value: 'first',
};

const toStartSlice = createSlice({
  name: 'to_slice',
  initialState,
  reducers: {
    setStartFirst(state: any) {
      state.value = 'first';
    },
    setStartSecond(state: any) {
      state.value = 'second';
    },
  },
});

export const { setStartFirst, setStartSecond } = toStartSlice.actions;
export default toStartSlice.reducer;
