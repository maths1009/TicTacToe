import { useState } from "react";
import { Game } from "./layouts";
import { GameContext } from "./providers";
import { players as playersMocks } from "./mocks";
import { calculateWinner } from "./utils";

const App: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>(playersMocks);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [history, setHistory] = useState<historyMove[]>([
    { board: Array(9).fill(null), currentPlayer: players[0] },
  ]);

  const currentSequence = history[currentMove];
  const isGameWin = !!calculateWinner(currentSequence.board);

  return (
    <GameContext.Provider
      value={{
        isGameWin,
        players,
        addPlayer: (player: Player) => setPlayers([...players, player]),
        history,
        addHistory: (board: BoardState, player: Player) => {
          const currentPlayer = players.findIndex((p) => p.id === player.id);
          const nextPlayer = players[currentPlayer + 1] || players[0];
          setHistory([
            ...history.slice(0, currentMove + 1),
            { board, currentPlayer: nextPlayer },
          ]);
        },
        currentMove,
        setCurrentMove,
        currentSequence,
        },
      }}
    >
      <Game />
    </GameContext.Provider>
  );
};

export default App;
