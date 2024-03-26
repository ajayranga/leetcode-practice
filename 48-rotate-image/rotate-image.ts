/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  for (let i = 0; i < ~~(matrix.length / 2); i++) {
    const len = matrix[0].length - i - 1;
    for (let j = i; j < len; j++) {
      [matrix[j][len], matrix[i][j]] = [matrix[i][j], matrix[j][len]];
      [matrix[matrix.length - i - 1][matrix.length - j - 1], matrix[i][j]] = [
        matrix[i][j],
        matrix[matrix.length - i - 1][matrix.length - j - 1],
      ];
      [matrix[len - j + i][i], matrix[i][j]] = [
        matrix[i][j],
        matrix[len - j + i][i],
      ];
    }
  }
  matrix.forEach((row) => console.log(row));
}