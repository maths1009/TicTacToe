import { Board } from "../Board";
import styles from "./index.module.scss";
import { Button } from "@/components/Button";
import { useGameContext } from "@/hooks";

export const Game: React.FC = () => {
  const {
    history,
    setCurrentMove,
    gameStatus,
    currentSequence,
    resetGame,
    players,
  } = useGameContext();

  const moves = history.map((_, move) => {
    const description = move ? `Go to move #${move}` : "Go to game start";
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
            <div>
              {players.map((p) => (
                <p>
                  name : {p.name} | symbol : {p.symbol} | scrore : {p.score}
                </p>
              ))}
            </div>
            <div className={styles.game__container__board__info__general}>
              <h3>Game Info</h3>
              {gameStatus ? (
                <div
                  className={styles.game__container__board__info__general__end}
                >
                  <p>
                    {gameStatus === "draw"
                      ? "Draw"
                      : `Winner ${
                          history[history.length - 2].currentPlayer.name
                        }`}
                  </p>

                  <Button onClick={() => resetGame()}>Restart</Button>
                </div>
              ) : (
                <p>Current Player {currentSequence.currentPlayer.name}</p>
              )}
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
