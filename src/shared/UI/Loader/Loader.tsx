import styles from './styles/loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
