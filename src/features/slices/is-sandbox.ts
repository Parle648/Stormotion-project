import { createSlice } from '@reduxjs/toolkit';

interface IIsSandbox {
  value: boolean;
}

const initialState: IIsSandbox = {
  value: false,
};

const isSandbox = createSlice({
  name: 'is-sandbox',
  initialState,
  reducers: {
    setSendboxMode(state: any) {
      state.value = true;
    },
    unsetSendboxMode(state: any) {
      state.value = false;
    },
  },
});

export const { setSendboxMode, unsetSendboxMode } = isSandbox.actions;
export default isSandbox.reducer;
