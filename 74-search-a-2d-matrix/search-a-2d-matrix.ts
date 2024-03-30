function searchMatrix(matrix: number[][], target: number): boolean {
  let l = 0,
    r = matrix.length - 1;
  let rowNum = 0,
    mid = 0;
  while (l <= r) {
    mid = ~~((l + r) / 2);
    if (matrix[mid][0] === target) {
      return true;
    }
    if (
      target > matrix[mid][0] &&
      target <= matrix[mid][matrix[mid].length - 1]
    ) {
      break;
    }
    if (matrix[mid][0] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  rowNum = mid;
  l = 0;
  r = matrix[rowNum].length - 1;
  while (l <= r) {
    let mid = ~~((l + r) / 2);
    if (matrix[rowNum][mid] === target) {
      return true;
    }
    if (matrix[rowNum][mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return false;
}