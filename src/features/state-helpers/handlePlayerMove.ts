import stateStore from '../../app/stateStore';
import { setIsBotTake, unsetIsBotTake } from '../slices/is-bot-take';
import { setOponentMatchsticks } from '../slices/oponent-matchsticks';
import { setPile } from '../slices/pile-slice';
import { setUserMatchsticks } from '../slices/player-matchsticks';

const handleOponentMove = (oponentMatchsticks: number, pile: number) => {
  stateStore.dispatch(setOponentMatchsticks(oponentMatchsticks));
  stateStore.dispatch(setPile(pile));
  stateStore.dispatch(unsetIsBotTake());
};

const handleUserMove = (userMatchsticks: number, pile: number) => {
  stateStore.dispatch(setPile(pile - userMatchsticks));
  stateStore.dispatch(setUserMatchsticks(userMatchsticks));

  if (pile - userMatchsticks === 0) return;

  stateStore.dispatch(setIsBotTake());
};

export { handleOponentMove };
export { handleUserMove };
