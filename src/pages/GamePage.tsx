import { useSelector } from 'react-redux';
import MatchSticks from '../entities/MatchStickList/MatchStickList';
import UserActions from '../widgets/UserActionsWidget/UserActionsWidget';

const GamePage = () => {
  const pile = useSelector((store: any) => store.pile.value);

  return (
    <div>
      <MatchSticks count={pile} />
      <UserActions />
    </div>
  );
};

export default GamePage;
