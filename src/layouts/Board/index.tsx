import { Square } from "src/components";
import styles from "./index.module.scss";
import { useGameContext } from "src/hooks";

const BOARD: [number, number] = [3, 3];

interface BoardProps {
  onPlay: (squares: (string | null)[]) => void;
}

export const Board: React.FC<BoardProps> = ({ onPlay }) => {
  const { currentSquares, isGameWin, players } = useGameContext();

  const handleClick = (i: number) => {
    if (isGameWin || currentSquares[i]) return;
    const nextSquares = currentSquares.slice();
    const xIsNext = nextSquares.filter(Boolean).length % 2 === 0;
    nextSquares[i] = xIsNext ? players[0].symbol : players[1].symbol;
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
                value={currentSquares[idx]}
                onClick={() => handleClick(idx)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
