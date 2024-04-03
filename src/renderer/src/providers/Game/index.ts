import { createContext } from 'react'

export interface GameContextType {
  players: Player[]
  addPlayer: (player: Player) => void

  history: historyMove[]
  addHistory: (board: BoardState, player: Player) => void

  currentMove: number
  setCurrentMove: (move: number) => void

  gameStatus: 'end' | 'draw' | null
  currentSequence: historyMove
  resetGame: () => void
}

export const GameContext = createContext<GameContextType>({} as GameContextType)
