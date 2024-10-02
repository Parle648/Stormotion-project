import GameRules from '../entities/GameRules/GameRules';
import ModeList from '../widgets/ModeList/ModeList';
import WelcomeTitle from '../widgets/WelcomeWidget/WelcomeWidget';

const Main = () => {
  return (
    <div>
      <WelcomeTitle />
      <ModeList />
      <GameRules />
    </div>
  );
};

export default Main;
