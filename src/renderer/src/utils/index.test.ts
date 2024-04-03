import { isDraw, calculateWinner } from './index'

describe('isDraw', () => {
  it('should return true if the current move is equal to the product of the board elements', () => {
    const currentMove = 9
    const board: BoardType = [3, 3]
    const result = isDraw(currentMove, board)
    expect(result).toBe(true)
  })

  it('should return false if the current move is not equal to the product of the board elements', () => {
    const currentMove = 8
    const board: BoardType = [3, 3]
    const result = isDraw(currentMove, board)
    expect(result).toBe(false)
  })
})

describe('calculateWinner', () => {
  describe('for 3*3 grid', () => {
    it('should return true if there is a winner horizontally', () => {
      const board = [1, 1, 1, null, null, null, null, null, null]
      const width = 3
      const height = 3
      const consecutive = 3
      const result = calculateWinner(board, width, height, consecutive)
      expect(result).toBe(true)
    })

    it('should return true if there is a winner vertically', () => {
      const board = [1, null, null, 1, null, null, 1, null, null]
      const width = 3
      const height = 3
      const consecutive = 3
      const result = calculateWinner(board, width, height, consecutive)
      expect(result).toBe(true)
    })

    it('should return true if there is a winner diagonally from top-left', () => {
      const board = [1, null, null, null, 1, null, null, null, 1]
      const width = 3
      const height = 3
      const consecutive = 3
      const result = calculateWinner(board, width, height, consecutive)
      expect(result).toBe(true)
    })

    it('should return true if there is a winner diagonally from top-right', () => {
      const board = [null, null, 1, null, 1, null, 1, null, null]
      const width = 3
      const height = 3
      const consecutive = 3
      const result = calculateWinner(board, width, height, consecutive)
      expect(result).toBe(true)
    })

    it('should return false if there is no winner', () => {
      const board = [1, null, null, null, 1, null, null, null, null]
      const width = 3
      const height = 3
      const consecutive = 3
      const result = calculateWinner(board, width, height, consecutive)
      expect(result).toBe(false)
    })
  })
  describe('for 4*4 grid', () => {
    it('should return true if there is a winner horizontally', () => {
      const board = [
        1,
        1,
        1,
        1,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
      const width = 4
      const height = 4
      const consecutive = 4
      const result = calculateWinner(board, width, height, consecutive)
      expect(result).toBe(true)
    })

    it('should return true if there is a winner vertically', () => {
      const board = [
        1,
        null,
        null,
        null,
        1,
        null,
        null,
        null,
        1,
        null,
        null,
        null,
        1,
        null,
        null,
        null
      ]
      const width = 4
      const height = 4
      const consecutive = 4
      const result = calculateWinner(board, width, height, consecutive)
      expect(result).toBe(true)
    })

    it('should return true if there is a winner diagonally from top-left', () => {
      const board = [
        1,
        null,
        null,
        null,
        null,
        1,
        null,
        null,
        null,
        null,
        1,
        null,
        null,
        null,
        null,
        1
      ]
      const width = 4
      const height = 4
      const consecutive = 4
      const result = calculateWinner(board, width, height, consecutive)
      expect(result).toBe(true)
    })

    it('should return true if there is a winner diagonally from top-right', () => {
      const board = [
        null,
        null,
        null,
        1,
        null,
        null,
        1,
        null,
        null,
        1,
        null,
        null,
        1,
        null,
        null,
        null
      ]
      const width = 4
      const height = 4
      const consecutive = 4
      const result = calculateWinner(board, width, height, consecutive)
      expect(result).toBe(true)
    })

    it('should return false if there is no winner', () => {
      const board = [
        1,
        null,
        null,
        null,
        null,
        1,
        null,
        null,
        null,
        null,
        1,
        null,
        null,
        null,
        null,
        null
      ]
      const width = 4
      const height = 4
      const consecutive = 4
      const result = calculateWinner(board, width, height, consecutive)
      expect(result).toBe(false)
    })

    it('should return false if there is no winner', () => {
      const board = [
        1,
        null,
        null,
        null,
        null,
        1,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
      const width = 4
      const height = 4
      const consecutive = 4
      const result = calculateWinner(board, width, height, consecutive)
      expect(result).toBe(false)
    })
  })
})
