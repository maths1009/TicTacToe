import { createContext } from "react";

interface GameContextType {
  players: Player[];
  addPlayer: (player: Player) => void;

  currentPlayer: Player;
  setCurrentPlayer: (player: Player) => void;

  history: BoardState[];
  addHistory: (squares: BoardState) => void;

  currentMove: number;
  setCurrentMove: (move: number) => void;

  isGameWin: boolean;
  currentSequenceMoves: BoardState;
}

export const GameContext = createContext<GameContextType>(
  {} as GameContextType
);
