import { BOARD, Board } from "../Board";
import styles from "./index.module.scss";
import { Button } from "src/components/Button";
import { useGameContext } from "src/hooks";

export const Game: React.FC = () => {
  const { history, setCurrentMove, isGameWin, currentMove, currentSequence } =
    useGameContext();

  const moves = history.map((_, move) => {
    const description = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <Button onClick={() => setCurrentMove(move)}>{description}</Button>
      </li>
    );
  });

  return (
    <div className={styles.game}>
      <div className={styles.game__container}>
        <div className={styles.game__container__board}>
          <Board />
          <div className={styles.game__container__board__info}>
            <div className={styles.game__container__board__info__general}>
              <h3>Game Info</h3>
              <p>
                {currentMove === BOARD[0] * BOARD[1] ? (
                  "Nul"
                ) : (
                  <>
                    {isGameWin ? "Gagnant " : "Current Player "}
                    {currentSequence.currentPlayer.symbol}
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.game__container__moves}>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
};
