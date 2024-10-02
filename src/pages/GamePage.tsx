import { useSelector } from 'react-redux';
import MatchSticks from '../entities/MatchStickList/MatchStickList';

const GamePage = () => {
  const pile = useSelector((store: any) => store.pile.value);

  return (
    <div>
      <MatchSticks count={pile} />
    </div>
  );
};

export default GamePage;
