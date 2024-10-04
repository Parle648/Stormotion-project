import { useSelector } from 'react-redux';
import MatchSticks from '../entities/MatchStickList/MatchStickList';
import UserActions from '../widgets/UserActionsWidget/UserActionsWidget';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WinModal from '../features/WinModal/WinModal';
import oponentAlgorithm from '../features/oponentAlgorithm/oponentAlgorithm';

const GamePage = () => {
  const pile = useSelector((store: any) => store.pile.value);
  const isBotTake = useSelector((store: any) => store.isBotTake.value);
  const userMatchsticks = useSelector((store: any) => store.userMatchsticks.value);
  const oponentMatchsticks = useSelector((store: any) => store.oponentMatchsticks.value);
  const takeUpTo = useSelector((store: any) => store.takeUpTo.value);

  const { tostart } = useParams();

  useEffect(() => {
    oponentAlgorithm(isBotTake, tostart as 'first' | 'second', pile, takeUpTo);
  }, [isBotTake]);

  return (
    <div className="game-page">
      <WinModal />
      <MatchSticks
        count={oponentMatchsticks}
        title={`Oponent have ${oponentMatchsticks} matchsticks`}
      />
      <MatchSticks count={pile} title={`Pile contains ${pile} matchsticks`} />
      <UserActions />
      <MatchSticks count={userMatchsticks} title={`Your have ${userMatchsticks} matchsticks`} />
    </div>
  );
};

export default GamePage;
