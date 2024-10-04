import { useSelector } from 'react-redux';
import styles from './styles/winModal.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import stateStore from '../../app/stateStore';
import { resetOponentMatchsticks } from '../slices/oponent-matchsticks';
import { setPile } from '../slices/pile-slice';
import { resetUserMatchsticks } from '../slices/player-matchsticks';
import { useRef } from 'react';
import { setIsBotTake } from '../slices/is-bot-take';
import { resetTakeUpTo } from '../slices/take-up-to';

const WinModal = () => {
  const pile = useSelector((store: any) => store.pile.value);
  const userMatchsticks = useSelector((store: any) => store.userMatchsticks.value);
  let currentPile = useRef(pile);
  const navigate = useNavigate();

  const { tostart } = useParams();

  const resetGame = (isGohome?: string) => {
    stateStore.dispatch(setPile(+currentPile.current));
    stateStore.dispatch(resetUserMatchsticks());
    stateStore.dispatch(resetOponentMatchsticks());
    stateStore.dispatch(resetTakeUpTo())

    if (tostart === 'second') {
      stateStore.dispatch(setIsBotTake());
    }

    if (isGohome) {
      stateStore.dispatch(setPile(25));
      navigate('/');
    }
  };

  return (
    <>
      {pile === 0 && (
        <div className={styles.modalBlock}>
          <div className={styles.modlaWindow}>
            {userMatchsticks % 2 === 0 ? 'You win' : 'Oponent win'}
            <div className={styles.btnsBlock}>
              <button onClick={() => resetGame('/')}>Go home</button>
              <button onClick={() => resetGame()}>Again</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WinModal;
