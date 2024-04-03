import { useState } from "react";
import { Game } from "./layouts";
import { GameContext } from "./providers";
import { players as playersMocks } from "./mocks";
import { calculateWinner } from "./utils";

const App: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>(playersMocks);
  const [currentPlayer, setCurrentPlayer] = useState<Player>(players[0]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [history, setHistory] = useState<BoardState[]>([Array(9).fill(null)]);

  const currentSequenceMoves = history[currentMove];
  const isGameWin = !!calculateWinner(currentSequenceMoves);

  return (
    <GameContext.Provider
      value={{
        isGameWin,
        players,
        addPlayer: (player: Player) => setPlayers([...players, player]),
        currentPlayer,
        setCurrentPlayer: (player: Player) => {
          const currentPlayer = players.findIndex((p) => p.id === player.id);
          const nextPlayer = players[currentPlayer + 1] || players[0];
          setCurrentPlayer(nextPlayer);
        },
        history,
        addHistory: (squares: BoardState) =>
          setHistory([...history.slice(0, currentMove + 1), squares]),
        currentMove,
        setCurrentMove,
        currentSequenceMoves,
      }}
    >
      <Game />
    </GameContext.Provider>
  );
};

export default App;
