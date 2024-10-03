import { createSlice } from '@reduxjs/toolkit';

interface IIsUserWin {
  value: boolean;
}

const initialState: IIsUserWin = {
  value: false,
};

const isUserWin = createSlice({
  name: 'is-user-win',
  initialState,
  reducers: {
    setUserWin(state: any) {
      state.value = true;
    },
    setUserLoose(state: any) {
      state.value = false;
    },
  },
});

export const { setUserWin, setUserLoose } = isUserWin.actions;
export default isUserWin.reducer;
