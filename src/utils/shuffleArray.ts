export default function shuffleArray<T>(array: T[]) {
  let currIdx = array.length;
  let tempVal, randIdx;

  // While there remain elements to shuffle...
  while (0 !== currIdx) {
    // Pick a remaining element...
    randIdx = Math.floor(Math.random() * currIdx);
    currIdx -= 1;

    // And swap it with the current element.
    tempVal = array[currIdx];
    array[currIdx] = array[randIdx];
    array[randIdx] = tempVal;
  }

  return array;
}
