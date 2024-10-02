import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/gameModeCard.module.scss';

const GameModeCard = ({
  children,
  path,
  background,
}: {
  children: React.ReactNode;
  path: string;
  background?: string;
}) => {
  return (
    <Link className={styles.card} to={path}>
      <h2 className={styles.title}>{children}</h2>
      <img className={styles.backgroundImage} src={background} alt="game-mode" />
    </Link>
  );
};

export default GameModeCard;
