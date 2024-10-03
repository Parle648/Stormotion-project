import GameModeCard from '../../entities/GameModeCard/GameModeCard';
import styles from './styles/modeList.module.scss';
import startFirstBackground from '../../shared/assets/start.jpg';
import startSecondBackground from '../../shared/assets/oponent-start.jpg';
import sanboxBackground from '../../shared/assets/sandbox.jpg';

const ModeList = () => {
  return (
    <div className={styles.list}>
      <GameModeCard path={'/game/first'} background={startFirstBackground}>
        Start first
      </GameModeCard>
      <GameModeCard path={'/game/second'} background={startSecondBackground}>
        Start second
      </GameModeCard>
      <GameModeCard path={'/sandbox'} background={sanboxBackground}>
        Sandbox
      </GameModeCard>
    </div>
  );
};

export default ModeList;
