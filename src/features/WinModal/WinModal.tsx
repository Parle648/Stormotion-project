import { useSelector } from 'react-redux';
import styles from './styles/winModal.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import stateStore from '../../app/stateStore';
import { setPile } from '../slices/pile-slice';
import { useRef } from 'react';
import { restartGame } from '../state-helpers/restartGame';

const WinModal = () => {
  const pile = useSelector((store: any) => store.pile.value);
  const userMatchsticks = useSelector((store: any) => store.userMatchsticks.value);
  let currentPile = useRef(pile);
  const navigate = useNavigate();

  const { tostart } = useParams();

  const resetGame = (isGohome?: string) => {
    restartGame(+currentPile.current, tostart as 'first' | 'second')

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
