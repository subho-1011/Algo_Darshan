import { shuffleArray } from "@/utils";

export default function generateArrayOfLength(size: number) {
  const array = Array.from({ length: size }, (x, i) => i);

  return shuffleArray(array);
}
