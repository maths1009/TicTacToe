import { createContext } from "react";

interface Player {
  id: string;
  name: string;
  symbol: string;
}

interface GameContextType {
  isGameWin: boolean;
  setIsGameWin: (isGameWin: boolean) => void;

  players: Player[];
  addPlayer: (player: Player) => void;

  currentPlayer: Player;
  setCurrentPlayer: (player: Player) => void;

  history: squares[];
  addHistory: (squares: squares) => void;
}

export const GameContext = createContext<GameContextType | null>(null);
