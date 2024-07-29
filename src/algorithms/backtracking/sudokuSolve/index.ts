import { SudokuCell } from "@/contexts/Backtracking/sudokuContext";

let N = 9;

// export function solveSudoku(array: number[][], row: number, col: number) {
//   console.log("solving");
//   if (row == N - 1 && col == N) return true;

//   if (col == N) {
//     row++;
//     col = 0;
//   }

//   if (array[row][col] != 0) return solveSudoku(array, row, col + 1);

//   for (let num = 1; num <= N; num++) {
//     if (isSafe(array, row, col, num)) {
//       array[row][col] = num;

//       if (solveSudoku(array, row, col + 1)) return true;
//     }
//     array[row][col] = 0;
//   }

//   return false;
// }

function isSafe(array: number[][], row: number, col: number, num: number) {
  for (let i = 0; i < N; i++) {
    if (array[row][i] === num || array[i][col] === num) {
      return false;
    }
  }

  let startRow = row - (row % 3);
  let startCol = col - (col % 3);

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (array[i][j] == num) return false;
    }
  }

  return true;
}

/**
 * Solves a Sudoku puzzle and records the steps taken to solve it.
 * @param array The Sudoku board represented as a 2D array of objects with 'value' and 'state' properties.
 * @returns An array of steps taken to solve the Sudoku puzzle.
 */
export const solveSudokuSteps = (array: SudokuCell[][]) => {
  const steps: SudokuCell[][][] = [];

  const solve = (board: SudokuCell[][], row: number, col: number) => {
    if (row === N - 1 && col === N) return true;

    if (col === N) {
      row++;
      col = 0;
    }

    if (board[row][col].value !== 0) return solve(board, row, col + 1);

    for (let num = 1; num <= N; num++) {
      let boardValues = board.map((row) => row.map((cell) => cell.value));

      if (isSafe(boardValues, row, col, num)) {
        board[row][col] = { value: num, state: "filled" };
        steps.push(JSON.parse(JSON.stringify(board)));

        if (solve(board, row, col + 1)) {
          return true;
        }

        board[row][col] = { value: 0, state: "backtracked" };
        steps.push(JSON.parse(JSON.stringify(board)));
      }
    }

    return false;
  };

  solve(array, 0, 0);
  return steps;
};
