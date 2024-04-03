import { isDraw } from "./index";

describe("isDraw", () => {
  it("should return true if the current move is equal to the product of the board elements", () => {
    const currentMove = 9;
    const board: BoardType = [3, 3];
    const result = isDraw(currentMove, board);
    expect(result).toBe(true);
  });

  it("should return false if the current move is not equal to the product of the board elements", () => {
    const currentMove = 8;
    const board: BoardType = [3, 3];
    const result = isDraw(currentMove, board);
    expect(result).toBe(false);
  });
});
