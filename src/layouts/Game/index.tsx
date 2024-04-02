import { useState } from "react";
import { Board } from "../Board";
import styles from "./index.module.scss";
import { Button } from "src/components/Button";

export const Game: React.FC = () => {
  const [history, setHistory] = useState<any[]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: squares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((_, move) => {
    const description = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <Button onClick={() => jumpTo(move)}>{description}</Button>
      </li>
    );
  });

  return (
    <div className={styles.game}>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <div className={styles.moves}>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
