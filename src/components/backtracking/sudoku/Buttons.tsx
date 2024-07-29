import { Button } from "@/components/ui/button";
import {
  useSudokuActions,
  useSudokuState,
} from "@/contexts/Backtracking/sudokuContext";

const SudokuPageButtons = () => {
  const { success } = useSudokuState();
  const { genarateNewSudoku, solveTheSudoku } = useSudokuActions();

  return (
    <div className="flex flex-col gap-5 justify-cen items-center w-full">
      <Button onClick={genarateNewSudoku}>New Sudoku</Button>
      <Button onClick={solveTheSudoku}>Solve Sudoku</Button>
      {success && <div className="text-green-500">{success}</div>}
    </div>
  );
};

export default SudokuPageButtons;
