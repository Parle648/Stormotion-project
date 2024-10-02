import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/gameModeCard.module.scss';

const GameModeCard = ({ children, path }: { children: React.ReactNode; path: string }) => {
  return (
    <div className={styles.card}>
      <Link to={path}>{children}</Link>
    </div>
  );
};

export default GameModeCard;
