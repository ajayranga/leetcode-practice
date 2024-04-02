/**
 Do not return anything, modify board in-place instead.
 */
/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
  let r = board.length,
    c = board[0].length;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let countAlive = 0;
      if (isInRange(i - 1, j - 1, r, c)) {
        if (board[i - 1][j - 1] === 1 || board[i - 1][j - 1] === 2) {
          countAlive++;
        }
      }
      if (isInRange(i - 1, j, r, c)) {
        if (board[i - 1][j] === 1 || board[i - 1][j] === 2) {
          countAlive++;
        }
      }
      if (isInRange(i - 1, j + 1, r, c)) {
        if (board[i - 1][j + 1] === 1 || board[i - 1][j + 1] === 2) {
          countAlive++;
        }
      }
      if (isInRange(i, j - 1, r, c)) {
        if (board[i][j - 1] === 1 || board[i][j - 1] === 2) {
          countAlive++;
        }
      }
      if (isInRange(i, j + 1, r, c)) {
        if (board[i][j + 1] === 1 || board[i][j + 1] === 2) {
          countAlive++;
        }
      }
      if (isInRange(i + 1, j - 1, r, c)) {
        if (board[i + 1][j - 1] === 1 || board[i + 1][j - 1] === 2) {
          countAlive++;
        }
      }
      if (isInRange(i + 1, j, r, c)) {
        if (board[i + 1][j] === 1 || board[i + 1][j] === 2) {
          countAlive++;
        }
      }
      if (isInRange(i + 1, j + 1, r, c)) {
        if (board[i + 1][j + 1] === 1 || board[i + 1][j + 1] === 2) {
          countAlive++;
        }
      }
      if (board[i][j] === 1) {
        if (countAlive === 2 || countAlive === 3) {
          board[i][j] = 1;
        } else {
          board[i][j] = 2;
        }
      }
      if (board[i][j] === 0 && countAlive === 3) {
        board[i][j] = 3;
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 2) {
        board[i][j] = 0;
      }
      if (board[i][j] === 3) {
        board[i][j] = 1;
      }
    }
  }
}
const isInRange = (i: number, j: number, r: number, c: number) => {
  return 0 <= i && i < r && 0 <= j && j < c;
};