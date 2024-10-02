import GameModeCard from '../../entities/GameModeCard/GameModeCard';
import styles from './styles/modeList.module.scss';
import startFirstBackground from '../../shared/assets/start.jpg';
import startSecondBackground from '../../shared/assets/oponent-start.jpg';

const ModeList = () => {
  return (
    <div className={styles.list}>
      <GameModeCard path={'/go-first'} background={startFirstBackground}>
        Start first
      </GameModeCard>
      <GameModeCard path={'/go-second'} background={startSecondBackground}>
        Start second
      </GameModeCard>
      <GameModeCard path={'/sandbox'}>Sandbox</GameModeCard>
    </div>
  );
};

export default ModeList;
