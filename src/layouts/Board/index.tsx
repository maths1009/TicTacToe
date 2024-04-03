import { Cell } from "src/components";
import styles from "./index.module.scss";
import { useGameContext } from "src/hooks";

export const BOARD: BoardType = [3, 3];

export const Board: React.FC = () => {
  const {
    currentSequence,
    gameStatus,
    addHistory,
    setCurrentMove,
    currentMove,
  } = useGameContext();

  const handleClick = (i: number) => {
    if (gameStatus || currentSequence.board[i]) return;
    const nextSquares = currentSequence.board.slice();
    nextSquares[i] = currentSequence.currentPlayer.symbol;
    addHistory(nextSquares, currentSequence.currentPlayer);
    setCurrentMove(currentMove + 1);
  };

  return (
    <div className={styles.board}>
      {Array.from({ length: BOARD[0] }).map((_, row) => (
        <div className={styles.board__row} key={row}>
          {Array.from({ length: BOARD[1] }).map((_, col) => {
            const idx = row * BOARD[0] + col;
            return (
              <Cell
                key={idx}
                value={currentSequence.board[idx]}
                onClick={() => handleClick(idx)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
