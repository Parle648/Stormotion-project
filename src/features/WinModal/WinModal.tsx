import { useSelector } from 'react-redux';
import styles from './styles/winModal.module.scss';
import { useNavigate } from 'react-router-dom';
import stateStore from '../../app/stateStore';
import { resetOponentMatchsticks } from '../slices/oponent-matchsticks';
import { setPile } from '../slices/pile-slice';
import { resetUserMatchsticks } from '../slices/player-matchsticks';
import { useRef } from 'react';

const WinModal = () => {
  const pile = useSelector((store: any) => store.pile.value);
  const userMatchsticks = useSelector((store: any) => store.userMatchsticks.value);
  let currentPile = useRef(pile);
  const navigate = useNavigate();

  const resetGame = (isGohome?: string) => {
    stateStore.dispatch(resetUserMatchsticks());
    stateStore.dispatch(resetOponentMatchsticks());
    stateStore.dispatch(setPile(+currentPile.current));

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
            {userMatchsticks % 2 === 0 ? 'You win' : 'opponent win'}
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
