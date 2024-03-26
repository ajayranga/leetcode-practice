/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  let res: number[] = [];
  let r1 = matrix.length,
    c1 = matrix[0].length;
  let count = 0,
    maxCount = r1 * c1,
    i: number;
  let startCol = 0,
    startRow = 0,
    endRow = r1 - 1,
    endCol = c1 - 1;
  while (count < maxCount) {
    for (i = startCol; i <= endCol && count < maxCount; i++) {
      res.push(matrix[startRow][i]);
      count++;
    }
    startRow++;
    for (i = startRow; i <= endRow && count < maxCount; i++) {
      res.push(matrix[i][endCol]);
      count++;
    }
    endCol--;
    for (i = endCol; i >= startCol && count < maxCount; i--) {
      res.push(matrix[endRow][i]);
      count++;
    }
    endRow--;
    for (i = endRow; i >= startRow && count < maxCount; i--) {
      res.push(matrix[i][startCol]);
      count++;
    }
    startCol++;
  }
  return res;
}
// @lc code=end
