import matchstick from '../../shared/assets/matchstick.jpg';
import styles from './styles/stickList.module.scss';

const MatchSticks = ({ count }: { count: number }) => {
  const matchstickIndexes: number[] = Array.from(Array(count).keys());
  return (
    <div className={styles.pileList}>
      {matchstickIndexes.map((stickIndex) => {
        return <img className={styles.stick} key={stickIndex} src={matchstick} alt="matchstick" />;
      })}
    </div>
  );
};

export default MatchSticks;
