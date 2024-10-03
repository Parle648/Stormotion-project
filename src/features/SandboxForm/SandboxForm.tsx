import { useForm } from 'react-hook-form';
import styles from './styles/sandboxForm.module.scss';

interface ISandBox {
  tostart: 'first' | 'second';
  takeUpTo: number;
  pile: number;
}

const SandboxForm = () => {
  const { register, handleSubmit } = useForm<ISandBox>();

  const setGameSetings = (data: ISandBox) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(setGameSetings)}>
      <h3>select your position</h3>
      <select className={styles.formSelect} {...register('tostart')}>
        <option value="first">first</option>
        <option value="second">second</option>
      </select>
      <h3>select n</h3>
      <input className={styles.formInput} type="number" {...register('takeUpTo')} />
      <h3>select m</h3>
      <input className={styles.formInput} type="number" {...register('pile')} />
      <button className={styles.submitBtn} type="submit">
        Apply
      </button>
    </form>
  );
};

export default SandboxForm;
