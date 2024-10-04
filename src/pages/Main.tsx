import { useEffect } from 'react';
import GameRules from '../entities/GameRules/GameRules';
import ModeList from '../widgets/ModeList/ModeList';
import WelcomeTitle from '../widgets/WelcomeWidget/WelcomeWidget';
import { resetOponentMatchsticks } from '../features/slices/oponent-matchsticks';
import { setPile } from '../features/slices/pile-slice';
import { unsetIsBotTake } from '../features/slices/is-bot-take';
import stateStore from '../app/stateStore';
import { resetUserMatchsticks } from '../features/slices/player-matchsticks';

const Main = () => {
  useEffect(() => {
    stateStore.dispatch(resetOponentMatchsticks());
    stateStore.dispatch(resetUserMatchsticks());
    stateStore.dispatch(setPile(25));
    stateStore.dispatch(unsetIsBotTake());
  }, []);

  return (
    <div>
      <WelcomeTitle />
      <ModeList />
      <GameRules />
    </div>
  );
};

export default Main;
