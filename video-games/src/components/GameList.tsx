import React from 'react';
import { Game } from '../store/results/types';
import GameItem from './GameItem';

interface GameListProps {
  list: Game[];
}

const GameList = ({ list }: GameListProps): React.ReactElement => {
  return (
    <div className="game-list">
      {list.map(
        (game: Game): React.ReactElement => (
          <GameItem key={game.name} game={game} />
        )
      )}
    </div>
  );
};

export default GameList;
