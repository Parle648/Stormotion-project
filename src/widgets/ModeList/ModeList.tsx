import GameModeCard from '../../entities/GameModeCard/GameModeCard';
import styles from './styles/modeList.module.scss';

const ModeList = () => {
  return (
    <div className={styles.list}>
      <GameModeCard path={'/go-first'}>Go first</GameModeCard>
      <GameModeCard path={'/go-second'}>Go second</GameModeCard>
      <GameModeCard path={'/sandbox'}>sandbox</GameModeCard>
    </div>
  );
};

export default ModeList;
