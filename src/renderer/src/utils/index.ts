/**
 * Calculates the winner of a Tic Tac Toe game on a given board.
 *
 * @param board - The game board represented as an array.
 * @param width - The width of the game board.
 * @param height - The height of the game board.
 * @param consecutive - The number of consecutive symbols required to win.
 * @returns A boolean indicating whether there is a winner or not.
 */
export const calculateWinner = <T>(
  board: T[],
  width: number,
  height: number,
  consecutive: number
): boolean => {
  /**
   * Checks if a line of symbols starting from a given index and with a given step is a winning line.
   *
   * @param start - The starting index of the line.
   * @param step - The step size to move to the next index in the line.
   * @returns A boolean indicating whether the line is a winning line or not.
   */
  const checkLine = (start: number, step: number): boolean => {
    const symbol = board[start]
    if (!symbol) return false
    for (let i = 1; i < consecutive; i++) {
      const nextIndex = start + step * i
      if (nextIndex >= board.length || board[nextIndex] !== symbol) {
        return false
      }
    }
    return true
  }

  /**
   * Checks if there is a winner on the game board.
   *
   * @returns A boolean indicating whether there is a winner or not.
   */
  const checkWinner = (): boolean => {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const index = i * width + j
        if (checkLine(index, 1)) return true // Horizontal
        if (checkLine(index, width)) return true // Vertical
        if (i <= height - consecutive && j <= width - consecutive) {
          if (checkLine(index, width + 1)) return true // Diagonal from top-left
        }
        if (i <= height - consecutive && j >= consecutive - 1) {
          if (checkLine(index, width - 1)) return true // Diagonal from top-right
        }
      }
    }
    return false
  }

  return checkWinner()
}

/**
 * Checks if the game is a draw.
 * @param currentMove - The current move number.
 * @param board - The game board.
 * @returns True if the game is a draw, false otherwise.
 */
export const isDraw = (currentMove: number, board: BoardType) => currentMove === board[0] * board[1]
