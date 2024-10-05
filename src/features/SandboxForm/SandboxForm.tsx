import { useForm } from 'react-hook-form';
import styles from './styles/sandboxForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { setCustomSettings } from './helpers/setCustomSettings';
import { ISandBox } from './types/IFormData';

const SandboxForm = () => {
  const { register, handleSubmit } = useForm<ISandBox>();
  const navigate = useNavigate();

  const setGameSetings = (data: ISandBox) => {
    if (data.takeUpTo > (data.pile*2 + 1) / 2) {
      alert('m should be less than 2n + 1');
      return;
    }
    setCustomSettings(data, navigate)
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
