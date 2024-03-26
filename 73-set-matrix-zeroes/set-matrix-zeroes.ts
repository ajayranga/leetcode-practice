/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const zeroContainingRow: number[] = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroContainingRow.push(i, j);
            }
        }
    }
    for (let i = 0; i < zeroContainingRow.length; i += 2) {
        for (let j = 0; j < matrix[zeroContainingRow[i]].length; j++) {
            matrix[zeroContainingRow[i]][j] = 0;
        }
    }
    for (let i = 0; i < zeroContainingRow.length; i += 2) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][zeroContainingRow[i + 1]] = 0;
        }
    }
}