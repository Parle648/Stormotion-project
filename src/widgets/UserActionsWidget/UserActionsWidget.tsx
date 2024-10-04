import { useSelector } from 'react-redux';
import styles from './styles/userActions.module.scss';
import { handleUserMove } from '../../features/state-helpers/handlePlayerMove';

const UserActions = () => {
  const pile = useSelector((store: any) => store.pile.value);
  const takeUpTo = useSelector((store: any) => store.takeUpTo.value);
  const userBtnIndexes: number[] = Array.from(Array(takeUpTo).keys());
  const isBotTake = useSelector((store: any) => store.isBotTake.value);

  const getMatchsticks = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isBotTake) {
      const matchsticks: string | undefined = event.currentTarget.value;
      handleUserMove(+matchsticks, pile);
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
