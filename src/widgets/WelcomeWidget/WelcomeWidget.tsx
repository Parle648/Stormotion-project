import styles from './styles/welkomeBlock.module.scss';

const WelcomeTitle = () => {
  return (
    <div className={styles.welcomeContainer}>
      <h1 className={styles.welcomeTitle}>Matchstick Duel</h1>
      <p className={styles.welcomeSubtitle}>A Game of Strategy and Precision!</p>
    </div>
  );
};

export default WelcomeTitle;
