import { handleOponentMove } from '../state-helpers/handlePlayerMove';

type IAlgorithm = (
  isBotTake: boolean,
  tostart: 'first' | 'second',
  pile: number,
  takeUpTo: number
) => void;

const oponentAlgorithm: IAlgorithm = (isBotTake, tostart, pile, takeUpTo) => {
  if (tostart === 'second' && pile === 25) {
    handleOponentMove(1, pile - 1);
    return;
  }

  if (isBotTake) {
    if (pile === takeUpTo + 1) {
      handleOponentMove(takeUpTo, pile - takeUpTo);
      return;
    }

    if (pile === 0) return;

    if (pile === 1) {
      handleOponentMove(1, pile - 1);
      return;
    }

    if (pile <= takeUpTo) {
      handleOponentMove(pile - 1, pile - (pile - 1));
      return;
    }

    for (let i = 1; i <= takeUpTo; i++) {
      if ((pile - i) % (1 + takeUpTo) === 0) {
        handleOponentMove(i, pile - i);
        return;
      }
    }

    handleOponentMove(takeUpTo, pile - takeUpTo);
  }
};

export default oponentAlgorithm;
