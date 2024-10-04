import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/gameModeCard.module.scss';

interface IGameModeCard {
  children: React.ReactNode;
  path: string;
  background?: string;
}

const GameModeCard: FC<IGameModeCard> = ({ children, path, background }) => {
  return (
    <Link className={styles.card} to={path}>
      <h2 className={styles.title}>{children}</h2>
      <img className={styles.backgroundImage} src={background} alt="game-mode" />
    </Link>
  );
};

export default GameModeCard;
