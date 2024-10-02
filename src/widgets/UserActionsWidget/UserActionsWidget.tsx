import styles from './styles/userActions.module.scss';

const UserActions = () => {
  return (
    <div className={styles.buttonList}>
      <button className={styles.btn}> +1 Matchstick</button>
      <button className={styles.btn}> +2 Matchsticks</button>
      <button className={styles.btn}> +3 Matchsticks</button>
    </div>
  );
};

export default UserActions;
