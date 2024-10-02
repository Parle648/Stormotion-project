import useToggle from '../../shared/hooks/useToggle';
import styles from './styles/gameRules.module.scss';

const GameRules = () => {
  const [isOpen, toggleOpen] = useToggle(false);
  return (
    <>
      <span
        className={`icon-question ${styles.openBtn}`}
        onClick={toggleOpen}
        title="click to see the rules"
      ></span>
      {isOpen && (
        <div className={styles.block}>
          <div className={styles.rules}>
            <button className={styles.closeBtn} onClick={toggleOpen}>
              x
            </button>
            <p>
              Two people are playing a game. From the pile of 25 matches, each player takes either
              1, 2 or 3 matches on each turn. The game is over once all matches are taken. Whoever
              has the even amount of matches wins
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default GameRules;
