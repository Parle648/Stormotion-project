import { configureStore } from '@reduxjs/toolkit';
import toStartSlice from '../features/slices/to-start-slice';
import isSandbox from '../features/slices/is-sandbox';
import userMatchsticks from '../features/slices/player-matchsticks';
import oponentMatchsticks from '../features/slices/oponent-matchsticks';
import pile from '../features/slices/pile-slice';
import isUserWin from '../features/slices/is-win';
import isBotTake from '../features/slices/is-bot-take';
import takeUpTo from '../features/slices/take-up-to';

const stateStore = configureStore({
  reducer: {
    tostart: toStartSlice,
    isSandbox: isSandbox,
    userMatchsticks: userMatchsticks,
    oponentMatchsticks: oponentMatchsticks,
    pile: pile,
    isUserWin: isUserWin,
    isBotTake: isBotTake,
    takeUpTo: takeUpTo,
  },
});

export default stateStore;
