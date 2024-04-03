import { createContext } from "react";

interface GameContextType {
  players: Player[];
  addPlayer: (player: Player) => void;

  history: historyMove[];
  addHistory: (board: BoardState, player: Player) => void;

  currentMove: number;
  setCurrentMove: (move: number) => void;

  isGameWin: boolean;
  currentSequence: historyMove;
}

export const GameContext = createContext<GameContextType>(
  {} as GameContextType
);
