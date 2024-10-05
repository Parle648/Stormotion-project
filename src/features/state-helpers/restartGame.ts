import stateStore from "../../app/stateStore";
import { setIsBotTake } from "../slices/is-bot-take";
import { resetOponentMatchsticks } from "../slices/oponent-matchsticks";
import { setPile } from "../slices/pile-slice";
import { resetUserMatchsticks } from "../slices/player-matchsticks";
import { resetTakeUpTo } from "../slices/take-up-to";

export const restartGame = (pile: number, tostart: 'first' | 'second') => {
    stateStore.dispatch(setPile(pile));
    stateStore.dispatch(resetUserMatchsticks());
    stateStore.dispatch(resetOponentMatchsticks());
    stateStore.dispatch(resetTakeUpTo())

    if (tostart === 'second') {
      stateStore.dispatch(setIsBotTake());
    }
}