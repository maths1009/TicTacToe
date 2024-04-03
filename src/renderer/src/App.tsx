import { useState } from 'react'
import { Game } from './layouts'
import { GameContext } from './providers'
import { players as playersMocks } from './mocks'
import { calculateWinner, isDraw } from './utils'
import { BOARD } from './layouts/Board'

const App: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>(playersMocks)
  const [currentMove, setCurrentMove] = useState<number>(0)
  const [history, setHistory] = useState<historyMove[]>([
    { board: Array(9).fill(null), currentPlayer: players[0] }
  ])

  const currentSequence = history[currentMove]
  const gameStatus = isDraw(currentMove, BOARD)
    ? 'draw'
    : calculateWinner(currentSequence.board, BOARD[0], BOARD[1], 4)
      ? 'end'
      : null

  return (
    <GameContext.Provider
      value={{
        gameStatus,
        players,
        addPlayer: (player: Player) => setPlayers([...players, player]),
        history,
        addHistory: (board: BoardState, player: Player) => {
          const currentPlayer = players.findIndex((p) => p.id === player.id)
          const nextPlayer = players[currentPlayer + 1] || players[0]
          setHistory([...history.slice(0, currentMove + 1), { board, currentPlayer: nextPlayer }])
        },
        currentMove,
        setCurrentMove,
        currentSequence,
        resetGame: () => {
          const newPlayers =
            gameStatus === 'draw'
              ? players
              : players.map((p) => {
                  if (p.id === history[history.length - 2].currentPlayer.id) {
                    p.score += 1
                  }
                  return p
                })
          setPlayers(newPlayers)
          setCurrentMove(0)
          setHistory([{ board: Array(9).fill(null), currentPlayer: newPlayers[0] }])
        }
      }}
    >
      <Game />
    </GameContext.Provider>
  )
}

export default App
