import { useForm } from 'react-hook-form';
import styles from './styles/sandboxForm.module.scss';
import stateStore from '../../app/stateStore';
import { resetOponentMatchsticks } from '../slices/oponent-matchsticks';
import { resetUserMatchsticks } from '../slices/player-matchsticks';
import { setPile } from '../slices/pile-slice';
import { setTakeUpTo } from '../slices/take-up-to';
import { useNavigate } from 'react-router-dom';
import { setIsBotTake } from '../slices/is-bot-take';

interface ISandBox {
  tostart: 'first' | 'second';
  takeUpTo: number;
  pile: number;
}

const SandboxForm = () => {
  const { register, handleSubmit } = useForm<ISandBox>();
  const navigate = useNavigate();

  const setGameSetings = (data: ISandBox) => {
    stateStore.dispatch(resetOponentMatchsticks());
    stateStore.dispatch(resetUserMatchsticks());
    stateStore.dispatch(setPile(2 * +data.pile + 1));
    stateStore.dispatch(setTakeUpTo(+data.takeUpTo));

    if (data.tostart === 'second') {
      stateStore.dispatch(setIsBotTake());
    }

    navigate(`/game/${data.tostart}`);
  };

  return (
    <>
      <h1 className={styles.formTitle}>
        Choose n and m where 2n + 1 will be the matchsticks in the pile and m is user action from
        take 1 matchstick to m
      </h1>
      <form className={styles.form} onSubmit={handleSubmit(setGameSetings)}>
        <h3>select your position</h3>
        <select className={styles.formSelect} {...register('tostart')}>
          <option value="first">first</option>
          <option value="second">second</option>
        </select>
        <h3>select n</h3>
        <input className={styles.formInput} type="number" {...register('pile')} />
        <h3>select m</h3>
        <input className={styles.formInput} type="number" {...register('takeUpTo')} />
        <button className={styles.submitBtn} type="submit">
          Apply
        </button>
      </form>
    </>
  );
};

export default SandboxForm;
