function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < board.length; i++) {
    let colArr: string[] = [],
      rowArr: string[] = [],
      gridArr: string[] = [];
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== '.') {
        rowArr.push(board[i][j]);
      }
      if (board[j][i] !== '.') {
        colArr.push(board[j][i]);
      }
      if (i % 3 === 0 && j % 3 === 0) {
        gridArr.push(
          board[i][j],
          board[i][j + 1],
          board[i][j + 2],
          board[i + 1][j],
          board[i + 1][j + 1],
          board[i + 1][j + 2],
          board[i + 2][j],
          board[i + 2][j + 1],
          board[i + 2][j + 2]
        );
        if (
          gridArr.filter((ch) => ch !== '.').length !==
          new Set(gridArr.filter((ch) => ch !== '.')).size
        ) {
          return false;
        }
      } else {
        gridArr = [];
      }
    }
    if (
      colArr.length !== new Set(colArr).size ||
      rowArr.length !== new Set(rowArr).size
    ) {
      return false;
    }
  }
  return true;
}