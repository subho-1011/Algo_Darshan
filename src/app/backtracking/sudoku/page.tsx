import SudokuCanvas from "@/components/backtracking/sudoku";
import SudokuProvider from "@/contexts/Backtracking/sudokuContext";

export default function SudokuPage() {
  return (
    <SudokuProvider>
      <SudokuCanvas />
    </SudokuProvider>
  );
}
