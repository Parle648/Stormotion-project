import { useSelector } from 'react-redux';
import stateStore from '../../app/stateStore';
import { setPile } from '../../features/slices/pile-slice';
import styles from './styles/userActions.module.scss';
import { setIsBotTake } from '../../features/slices/is-bot-take';
import { setUserMatchsticks } from '../../features/slices/player-matchsticks';

const UserActions = () => {
  const pile = useSelector((store: any) => store.pile.value);
  const takeUpTo = useSelector((store: any) => store.takeUpTo.value);
  const userBtnIndexes: number[] = Array.from(Array(takeUpTo).keys());
  const isBotTake = useSelector((store: any) => store.isBotTake.value);

  const getMatchsticks = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isBotTake) {
      const matchsticks: string | undefined = event.currentTarget.value;
      stateStore.dispatch(setPile(pile - +matchsticks));
      stateStore.dispatch(setUserMatchsticks(+matchsticks));

      if (pile - +matchsticks === 0) return;

      stateStore.dispatch(setIsBotTake());
    }
  };

  return (
    <div className={styles.buttonList}>
      {userBtnIndexes.map((index) => {
        return (
          <div key={`userActionBtn${index}`}>
            {pile >= index + 1 && (
              <button
                key={index}
                className={styles.btn}
                value={index + 1}
                onClick={(event) => getMatchsticks(event)}
              >
                {' '}
                +{index + 1} Matchstick
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default UserActions;
