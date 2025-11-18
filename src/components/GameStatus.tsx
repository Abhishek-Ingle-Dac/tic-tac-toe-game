import { Player, GameStatus as Status } from '../types/game';
import { X, Circle, Trophy, Minus } from 'lucide-react';

interface GameStatusProps {
  status: Status;
  currentPlayer: Player;
  winner: Player | null;
}

function GameStatus({ status, currentPlayer, winner }: GameStatusProps) {
  if (status === 'won' && winner) {
    return (
      <div className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold text-slate-800 animate-bounce">
        <Trophy className="w-8 h-8 text-yellow-500" />
        <span>Player</span>
        {winner === 'X' ? (
          <X className="w-8 h-8 text-blue-600" strokeWidth={3} />
        ) : (
          <Circle className="w-8 h-8 text-orange-600" strokeWidth={3} />
        )}
        <span>Wins!</span>
      </div>
    );
  }

  if (status === 'tie') {
    return (
      <div className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold text-slate-600">
        <Minus className="w-8 h-8" />
        <span>It's a Tie!</span>
        <Minus className="w-8 h-8" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3 text-xl md:text-2xl font-semibold text-slate-700">
      <span>Current Player:</span>
      {currentPlayer === 'X' ? (
        <X className="w-7 h-7 text-blue-600" strokeWidth={3} />
      ) : (
        <Circle className="w-7 h-7 text-orange-600" strokeWidth={3} />
      )}
    </div>
  );
}

export default GameStatus;
