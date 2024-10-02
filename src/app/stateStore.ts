import { configureStore } from '@reduxjs/toolkit';
import toStartSlice from '../features/slices/to-start-slice';
import isSandbox from '../features/slices/is-sandbox';
import userMatchsticks from '../features/slices/player-matchsticks';
import oponentMatchsticks from '../features/slices/oponent-matchsticks';
import pile from '../features/slices/pile-slice';
import isUserWin from '../features/slices/is-win';

const stateStore = configureStore({
  reducer: {
    tostart: toStartSlice,
    isSandbox: isSandbox,
    userMatchsticks: userMatchsticks,
    oponentMatchsticks: oponentMatchsticks,
    pile: pile,
    isUserWin: isUserWin,
  },
});

export default stateStore;
