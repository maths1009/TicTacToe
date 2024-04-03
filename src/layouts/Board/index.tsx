import { Cell } from "src/components";
import styles from "./index.module.scss";
import { useGameContext } from "src/hooks";

const BOARD: [number, number] = [3, 3];

export const Board: React.FC = () => {
  const {
    currentSequenceMoves,
    isGameWin,
    currentPlayer,
    setCurrentPlayer,
    addHistory,
    setCurrentMove,
    currentMove,
  } = useGameContext();

  const handleClick = (i: number) => {
    if (isGameWin || currentSequenceMoves[i]) return;
    const nextSquares = currentSequenceMoves.slice();
    nextSquares[i] = currentPlayer.symbol;
    setCurrentPlayer(currentPlayer);
    addHistory(nextSquares);
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
                value={currentSequenceMoves[idx]}
                onClick={() => handleClick(idx)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
