"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type BoardType = boolean[][];

type QueenPosition = [rowIndex: number, columnIndex: number];

type State = {
  noOfQueens: number;
  queenBoard: BoardType;
  colorizedArray: BoardType;
  hoverArray: BoardType;
  isSolved: boolean;
};

type Actions = {
  changeNoOfQueens: (noOfQueens: number) => void;
  selectQueenPosition: (position: QueenPosition) => void;
  undoQueenPosition: () => void;
  updateOnHoveredArray: (position: QueenPosition) => void;
  resetHoveredArray: () => void;
  startGame: () => void;
  resetGame: () => void;
};

const NQueenStateContext = createContext<State | undefined>(undefined);
const NQueenActionsContext = createContext<Actions | undefined>(undefined);

const INITIAL_NO_OF_QUEENS = 8;

const NQueenProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [noOfQueens, setNoOfQueens] = useState<number>(INITIAL_NO_OF_QUEENS);
  const generateEmptyBoard = useCallback(
    (): BoardType =>
      Array.from({ length: noOfQueens }, () => Array(noOfQueens).fill(false)),
    [noOfQueens]
  );

  const [queenBoard, setQueenBoard] = useState<BoardType>(generateEmptyBoard());
  const [hoverArray, setHoverArray] = useState(generateEmptyBoard());
  const [colorizedArray, setColorizedArray] = useState(generateEmptyBoard());
  const [queenPositions, setQueenPositions] = useState<QueenPosition[]>([]);
  const [isSolved, setIsSolved] = useState(false);

  const isBoardSolved = () => {
    for (let i = 0; i < noOfQueens; i++) {
      if (!queenBoard[i].includes(true)) return false;
    }

    return true;
  };

  const isSafePosition = (
    board: BoardType,
    position: QueenPosition
  ): boolean => {
    const [rowIndex, colIndex] = position;

    // Check this row
    if (board[rowIndex].includes(true)) return false;

    // Check this column
    for (let i = 0; i < noOfQueens; i++) {
      if (board[i][colIndex]) return false;
    }

    // Check diagonal
    for (let i = 0; i < noOfQueens; i++) {
      if (Math.abs(rowIndex - i) === Math.abs(colIndex - i)) {
        if (board[i][i]) return false;
      }
    }

    return true;
  };

  const changeNoOfQueens = (n: number) => setNoOfQueens(n);

  const selectQueenPosition = (position: QueenPosition) => {
    if (!isSafePosition(queenBoard, position)) return;

    const [rowIndex, colIndex] = position;

    setQueenBoard((prevBoard) => {
      const newQueenBoard = [...prevBoard];
      newQueenBoard[rowIndex][colIndex] = true;
      return newQueenBoard;
    });
    updateColorizedArray();

    setQueenPositions([...queenPositions, position]);
    setIsSolved(isBoardSolved());
  };

  const undoQueenPosition = () => {
    if (queenPositions.length > 0) {
      const lastPosition = queenPositions.pop();
      const [rowIndex, colIndex] = lastPosition!;
      setQueenBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        newBoard[rowIndex][colIndex] = false;

        return newBoard;
      });
      updateColorizedArray();
    }
  };

  const updateColorizedArray = () => {
    const newColorizedArray = [...generateEmptyBoard()];

    for (let i = 0; i < noOfQueens; i++) {
      for (let j = 0; j < noOfQueens; j++) {
        if (queenBoard[i][j]) {
          newColorizedArray.forEach((row, rowIndex) =>
            row.forEach((value, colIndex) => {
              if (
                rowIndex === i ||
                colIndex === j ||
                Math.abs(rowIndex - i) === Math.abs(colIndex - j)
              ) {
                newColorizedArray[rowIndex][colIndex] = true;
              }
            })
          );
        }
      }
    }

    setColorizedArray(newColorizedArray);
  };

  const updateOnHoveredArray = (position: QueenPosition) => {
    const [rowIndex, colIndex] = position;

    const newHoverArray = [...generateEmptyBoard()].map((row, i) =>
      row.map(
        (_, j) =>
          i === rowIndex ||
          j === colIndex ||
          Math.abs(i - rowIndex) === Math.abs(j - colIndex)
      )
    );

    setHoverArray(newHoverArray);
  };

  const resetHoveredArray = () => setHoverArray(generateEmptyBoard());

  const solveNQueens = (board: BoardType, row: number) => {
    if (row >= noOfQueens) return true;

    for (let col = 0; col < noOfQueens; col++) {
      if (isSafePosition(board, [row, col])) {
        board[row][col] = true;
        if (solveNQueens(board, row + 1)) return true;
        board[row][col] = false;
      }
    }

    return false;
  };

  // TODO: Complete this function later
  const startGame = () => {
    const board = queenBoard;
    solveNQueens(board, 0);
    return board;
  };

  const resetGame = () => {
    setNoOfQueens(noOfQueens);
    setQueenBoard(generateEmptyBoard());
    setHoverArray(generateEmptyBoard());
    setColorizedArray(generateEmptyBoard());
    setQueenPositions([]);
    setIsSolved(false);
  };

  useEffect(() => {
    resetGame();
  }, [noOfQueens]);

  return (
    <NQueenStateContext.Provider
      value={{
        noOfQueens,
        queenBoard,
        colorizedArray,
        hoverArray,
        isSolved,
      }}
    >
      <NQueenActionsContext.Provider
        value={{
          changeNoOfQueens,
          undoQueenPosition,
          selectQueenPosition,
          updateOnHoveredArray,
          resetHoveredArray,
          startGame,
          resetGame,
        }}
      >
        {children}
      </NQueenActionsContext.Provider>
    </NQueenStateContext.Provider>
  );
};

const useNQueenState = () => {
  const context = useContext(NQueenStateContext);

  if (!context) {
    throw new Error("useNQueenState must be used within a NQueenProvider");
  }

  return context;
};

const useNQueenActions = () => {
  const context = useContext(NQueenActionsContext);

  if (!context) {
    throw new Error("useNQueenActions must be used within a NQueenProvider");
  }

  return context;
};

export { NQueenProvider, useNQueenState, useNQueenActions };
