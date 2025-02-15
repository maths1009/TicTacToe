type HTMLProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T]

type BoardState = (string | null)[]
type BoardType = [number, number]
type historyMove = {
  currentPlayer: Player
  board: BoardState
}

type Player = {
  id: string
  name: string
  symbol: string
  score: number
}
