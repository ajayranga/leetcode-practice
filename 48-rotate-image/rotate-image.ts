/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  // transpose
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[0].length; j++) {
      matrix[i][j] = matrix[i][j] + matrix[j][i];
      matrix[j][i] = matrix[i][j] - matrix[j][i];
      matrix[i][j] = matrix[i][j] - matrix[j][i];
    }
  }
  // column reverse
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < Math.floor(matrix[0].length / 2); j++) {
      matrix[i][j] = matrix[i][j] + matrix[i][matrix[i].length - j - 1];
      matrix[i][matrix[i].length - j - 1] =
        matrix[i][j] - matrix[i][matrix[i].length - j - 1];
      matrix[i][j] = matrix[i][j] - matrix[i][matrix[i].length - j - 1];
    }
  }
}