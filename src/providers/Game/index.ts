import { createContext } from "react";

interface GameContextType {
  players: Player[];
  addPlayer: (player: Player) => void;

  currentPlayer: Player;
  setCurrentPlayer: (player: Player) => void;

  history: squares[];
  addHistory: (squares: squares) => void;

  currentMove: number;
  setCurrentMove: (move: number) => void;

  isGameWin: boolean;
  currentSquares: squares;
}

export const GameContext = createContext<GameContextType>(
  {} as GameContextType
);
