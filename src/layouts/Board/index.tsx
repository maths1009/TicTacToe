import { Square } from "src/components";
import styles from "./index.module.scss";
import { calculateWinner } from "src/utils";

const BOARD: [number, number] = [3, 3];

interface BoardProps {
  xIsNext: boolean;
  squares: squares;
  onPlay: (squares: (string | null)[]) => void;
}

export const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) return;
    const nextSquares = squares.slice();
    if (xIsNext) nextSquares[i] = "X";
    else nextSquares[i] = "O";
    onPlay(nextSquares);
  };

  return (
    <div className={styles.board}>
      {Array.from({ length: BOARD[0] }).map((_, row) => (
        <div className={styles.row} key={row}>
          {Array.from({ length: BOARD[1] }).map((_, col) => {
            const idx = row * BOARD[0] + col;
            return (
              <Square
                key={idx}
                value={squares[idx]}
                onClick={() => handleClick(idx)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
