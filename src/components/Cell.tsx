import { Cell as CellType } from '../types/game';
import { X, Circle } from 'lucide-react';

interface CellProps {
  value: CellType;
  onClick: () => void;
  isWinning: boolean;
  disabled: boolean;
}

function Cell({ value, onClick, isWinning, disabled }: CellProps) {
  const handleClick = () => {
    if (!value && !disabled) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || value !== null}
      className={`
        aspect-square w-full bg-white rounded-xl shadow-md
        flex items-center justify-center
        transition-all duration-300 ease-out
        ${!value && !disabled ? 'hover:bg-slate-50 hover:shadow-lg hover:scale-105 cursor-pointer' : ''}
        ${value ? 'cursor-not-allowed' : ''}
        ${isWinning ? 'bg-green-100 ring-4 ring-green-400 shadow-xl scale-105' : ''}
        ${disabled && !value ? 'cursor-not-allowed opacity-60' : ''}
      `}
    >
      {value === 'X' && (
        <X
          className={`w-16 h-16 md:w-20 md:h-20 transition-all duration-300 ${isWinning ? 'text-green-600' : 'text-blue-600'}`}
          strokeWidth={3}
        />
      )}
      {value === 'O' && (
        <Circle
          className={`w-16 h-16 md:w-20 md:h-20 transition-all duration-300 ${isWinning ? 'text-green-600' : 'text-orange-600'}`}
          strokeWidth={3}
        />
      )}
    </button>
  );
}

export default Cell;
