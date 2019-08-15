import React from 'react';
import { Game } from '../store/results/types';

interface GameItemProps {
  game: Game;
}

const GameItem = ({ game }: GameItemProps): React.ReactElement => {
  return (
    <div className="game-list__item">
      <h1>{game.name}</h1>
    </div>
  );
};

export default GameItem;
