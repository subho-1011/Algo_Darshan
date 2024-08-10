import { TToworOfHanoiDisk } from "@/types";

function movedisk() {}

const towerOfHanoi = (n: number, from: string, to: string, aux: string) => {
  if (n === 1) {
    console.log(n + " disk " + from + " to " + to);
    return;
  }

  towerOfHanoi(n - 1, from, aux, to);
  console.log(n + " disk " + from + " to " + to);
  //   const disk = from.shift();
  //   if (disk) {
  //     to.push(disk);
  //     steps.push([[...from], [...to], [...aux]]);
  //   }
  towerOfHanoi(n - 1, aux, to, from);
};

const solveTowerOfHanoi = (n: number, source: TToworOfHanoiDisk[]) => {
  let to: TToworOfHanoiDisk[] = [];
  let aux: TToworOfHanoiDisk[] = [];
  let steps: TToworOfHanoiDisk[][][] = [];

  towerOfHanoi(n, "A", "B", "C");
  console.log(steps);

  return steps;
};

export default solveTowerOfHanoi;
