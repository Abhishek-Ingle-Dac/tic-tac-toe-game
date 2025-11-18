import { Cell as CellType } from '../types/game';
import Cell from './Cell';

interface BoardProps {
  board: CellType[];
  onCellClick: (index: number) => void;
  winningLine: number[] | null;
  disabled: boolean;
}

function Board({ board, onCellClick, winningLine, disabled }: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-3 w-full max-w-md mx-auto">
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          onClick={() => onCellClick(index)}
          isWinning={winningLine?.includes(index) || false}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

export default Board;
