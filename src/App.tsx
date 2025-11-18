import { RotateCcw } from 'lucide-react';
import Board from './components/Board';
import GameStatus from './components/GameStatus';
import { useGame } from './hooks/useGame';

function App() {
  const { gameState, winningLine, makeMove, resetGame } = useGame();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
            Tic-Tac-Toe
          </h1>
          <p className="text-slate-600 text-sm md:text-base">
            Challenge a friend to a classic game
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="mb-8">
            <GameStatus
              status={gameState.status}
              currentPlayer={gameState.currentPlayer}
              winner={gameState.winner}
            />
          </div>

          <Board
            board={gameState.board}
            onCellClick={makeMove}
            winningLine={winningLine}
            disabled={gameState.status !== 'playing'}
          />

          <div className="mt-8 flex justify-center">
            <button
              onClick={resetGame}
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <RotateCcw className="w-5 h-5" />
              New Game
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-slate-600 text-sm">
          <p>Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}

export default App;
