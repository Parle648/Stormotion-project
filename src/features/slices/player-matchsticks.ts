import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IUserManchStick {
  value: number;
}

const initialState: IUserManchStick = {
  value: 0,
};

const userMatchsticks = createSlice({
  name: 'userMatchsticks',
  initialState,
  reducers: {
    setUserMatchsticks(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    resetUserMatchsticks(state) {
      state.value = 0;
    },
  },
});

export const { setUserMatchsticks, resetUserMatchsticks } = userMatchsticks.actions;
export default userMatchsticks.reducer;
