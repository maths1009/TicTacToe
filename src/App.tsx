import { useState } from "react";
import { Game } from "./layouts";
import { GameContext } from "./providers";
import { players as playersMocks } from "./mocks";
import { calculateWinner } from "./utils";

const App: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>(playersMocks);
  const [currentPlayer, setCurrentPlayer] = useState<Player>(players[0]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [history, setHistory] = useState<squares[]>([Array(9).fill(null)]);

  const currentSquares = history[currentMove];
  const isGameWin = !!calculateWinner(currentSquares);

  return (
    <GameContext.Provider
      value={{
        isGameWin,
        players,
        addPlayer: (player: Player) => setPlayers([...players, player]),
        currentPlayer,
        setCurrentPlayer,
        history,
        addHistory: (squares: squares) => setHistory([...history, squares]),
        currentMove,
        setCurrentMove,
        currentSquares,
      }}
    >
      <Game />
    </GameContext.Provider>
  );
};

export default App;
