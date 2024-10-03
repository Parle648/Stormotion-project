import { useSelector } from 'react-redux';
import stateStore from '../../app/stateStore';
import { setPile } from '../../features/slices/pile-slice';
import styles from './styles/userActions.module.scss';
import { setIsBotTake } from '../../features/slices/is-bot-take';
import { setUserMatchsticks } from '../../features/slices/player-matchsticks';

const UserActions = () => {
  const pile = useSelector((store: any) => store.pile.value);
  const isBotTake = useSelector((store: any) => store.isBotTake.value);

  const getMatchsticks = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isBotTake) {
      const matchsticks: string | undefined = event.currentTarget.value;
      stateStore.dispatch(setPile(pile - +matchsticks));

      stateStore.dispatch(setIsBotTake());
      stateStore.dispatch(setUserMatchsticks(+matchsticks));
    }
  };

  return (
    <div className={styles.buttonList}>
      <button className={styles.btn} value={1} onClick={(event) => getMatchsticks(event)}>
        {' '}
        +1 Matchstick
      </button>
      <button className={styles.btn} value={2} onClick={(event) => getMatchsticks(event)}>
        {' '}
        +2 Matchsticks
      </button>
      <button className={styles.btn} value={3} onClick={(event) => getMatchsticks(event)}>
        {' '}
        +3 Matchsticks
      </button>
    </div>
  );
};

export default UserActions;
