import { Board } from "../Board";
import styles from "./index.module.scss";
import { Button } from "src/components/Button";
import { useGameContext } from "src/hooks";

export const Game: React.FC = () => {
  const { history, setCurrentMove } = useGameContext();

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
      <Board />
      <div className={styles.moves}>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
