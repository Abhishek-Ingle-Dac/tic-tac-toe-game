import { useState, useCallback } from 'react';
import { GameState, Player } from '../types/game';
import { checkWinner, checkTie, getWinningLine } from '../utils/gameLogic';

const INITIAL_STATE: GameState = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  status: 'playing',
  winner: null,
};

export const useGame = () => {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);

  const makeMove = useCallback((index: number) => {
    if (gameState.board[index] || gameState.status !== 'playing') {
      return;
    }

    const newBoard = [...gameState.board];
    newBoard[index] = gameState.currentPlayer;

    const winner = checkWinner(newBoard);
    const isTie = checkTie(newBoard);

    if (winner) {
      setWinningLine(getWinningLine(newBoard));
      setGameState({
        board: newBoard,
        currentPlayer: gameState.currentPlayer,
        status: 'won',
        winner,
      });
    } else if (isTie) {
      setGameState({
        board: newBoard,
        currentPlayer: gameState.currentPlayer,
        status: 'tie',
        winner: null,
      });
    } else {
      setGameState({
        board: newBoard,
        currentPlayer: gameState.currentPlayer === 'X' ? 'O' : 'X',
        status: 'playing',
        winner: null,
      });
    }
  }, [gameState]);

  const resetGame = useCallback(() => {
    setGameState(INITIAL_STATE);
    setWinningLine(null);
  }, []);

  return {
    gameState,
    winningLine,
    makeMove,
    resetGame,
  };
};
