import { useSelector } from 'react-redux';
import MatchSticks from '../entities/MatchStickList/MatchStickList';
import UserActions from '../widgets/UserActionsWidget/UserActionsWidget';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import stateStore from '../app/stateStore';
import { setPile } from '../features/slices/pile-slice';
import { unsetIsBotTake } from '../features/slices/is-bot-take';
import { setOponentMatchsticks } from '../features/slices/oponent-matchsticks';

const GamePage = () => {
  const pile = useSelector((store: any) => store.pile.value);
  const isBotTake = useSelector((store: any) => store.isBotTake.value);
  const userMatchsticks = useSelector((store: any) => store.userMatchsticks.value);
  const oponentMatchsticks = useSelector((store: any) => store.oponentMatchsticks.value);

  const takeUpTo = useSelector((store: any) => store.takeUpTo.value);
  let currentPile = pile;

  const { tostart } = useParams();

  useEffect(() => {
    if (tostart === 'second' && pile === 25) {
      console.log('second');

      stateStore.dispatch(setOponentMatchsticks(1));
      stateStore.dispatch(setPile(pile - 1));
      stateStore.dispatch(unsetIsBotTake());

      return;
    }

    if (isBotTake) {
      if (pile === takeUpTo + 1) {
        stateStore.dispatch(setOponentMatchsticks(takeUpTo));
        stateStore.dispatch(setPile(pile - takeUpTo));
        stateStore.dispatch(unsetIsBotTake());

        return;
      }

      if (pile === 1) {
        stateStore.dispatch(setOponentMatchsticks(1));
        stateStore.dispatch(setPile(pile - 1));
        stateStore.dispatch(unsetIsBotTake());
      }

      for (let i = 1; i <= takeUpTo; i++) {
        if ((pile - i) % (1 + takeUpTo) === 0) {
          stateStore.dispatch(setOponentMatchsticks(i));
          stateStore.dispatch(setPile(pile - i));
          stateStore.dispatch(unsetIsBotTake());

          return;
        }
      }

      stateStore.dispatch(setOponentMatchsticks(takeUpTo));
      stateStore.dispatch(setPile(pile - takeUpTo));
      stateStore.dispatch(unsetIsBotTake());
    }
  }, [isBotTake]);

  useEffect(() => {
    currentPile = pile;
  }, [pile]);

  return (
    <div>
      <MatchSticks count={oponentMatchsticks} />
      <MatchSticks count={currentPile} />
      <UserActions />
      <MatchSticks count={userMatchsticks} />
    </div>
  );
};

export default GamePage;
