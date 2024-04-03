import { Square } from "src/components";
import styles from "./index.module.scss";
import { useGameContext } from "src/hooks";

const BOARD: [number, number] = [3, 3];

export const Board: React.FC = () => {
  const {
    currentSquares,
    isGameWin,
    currentPlayer,
    setCurrentPlayer,
    addHistory,
    setCurrentMove,
    currentMove,
  } = useGameContext();

  const handleClick = (i: number) => {
    if (isGameWin || currentSquares[i]) return;
    const nextSquares = currentSquares.slice();
    nextSquares[i] = currentPlayer.symbol;
    setCurrentPlayer(currentPlayer);
    addHistory(nextSquares);
    setCurrentMove(currentMove + 1);
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
