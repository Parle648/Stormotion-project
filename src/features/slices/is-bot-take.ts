import { createSlice } from '@reduxjs/toolkit';

interface IIsBotTake {
  value: boolean;
}

const initialState: IIsBotTake = {
  value: false,
};

const isBotTake = createSlice({
  name: 'is-bot-take',
  initialState,
  reducers: {
    setIsBotTake(state: any) {
      state.value = true;
    },
    unsetIsBotTake(state: any) {
      state.value = false;
    },
  },
});

export const { setIsBotTake, unsetIsBotTake } = isBotTake.actions;
export default isBotTake.reducer;
