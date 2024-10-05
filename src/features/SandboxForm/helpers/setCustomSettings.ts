import stateStore from "../../../app/stateStore";
import { setIsBotTake } from "../../slices/is-bot-take";
import { resetOponentMatchsticks } from "../../slices/oponent-matchsticks";
import { setPile } from "../../slices/pile-slice";
import { resetUserMatchsticks } from "../../slices/player-matchsticks";
import { setTakeUpTo } from "../../slices/take-up-to";
import { ISandBox } from "../types/IFormData";

export const setCustomSettings = (data: ISandBox, navigate: any) => {
    stateStore.dispatch(resetOponentMatchsticks());
    stateStore.dispatch(resetUserMatchsticks());
    stateStore.dispatch(setPile(2 * +data.pile + 1));
    stateStore.dispatch(setTakeUpTo(+data.takeUpTo));

    if (data.tostart === 'second') {
      stateStore.dispatch(setIsBotTake());
    }

    navigate(`/game/${data.tostart}`);
}