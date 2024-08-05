/**
 * Generates a 2D array (board) of specified dimensions filled with a given value.
 *
 * @param noOfRows - The number of rows in the board.
 * @param value - The value to fill the board with. Defaults to `false` if not provided.
 *
 * @returns A 2D array (board) of dimensions `noOfRows x noOfRows`, filled with the given `value`.
 */
const generateEmptyBoard = (
  noOfRows: number,
  value: boolean = false
): boolean[][] => {
  const array = Array.from({ length: noOfRows }, () =>
    Array(noOfRows).fill(value)
  );

  return array;
};

export default generateEmptyBoard;
