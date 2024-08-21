import generateArrayOfLength from "./generateArrayOfLength";

// Define the structure of a tree node
class TTreeNode {
  value: number | null;
  left: TTreeNode | null;
  right: TTreeNode | null;

  constructor(value: number | null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to create the binary tree from the array
function generateRandomTree(
  noOfNodes: number,
  randomness: number = 25
): TTreeNode | null {
  let arr: (number | null)[] = generateArrayOfLength(noOfNodes);

  for (let i = 2; i < arr.length; i++) {
    // insert 25% null values in the array
    if (Math.random() < randomness / 100) {
      arr[i] = null;
    }
  }

  const root = new TTreeNode(arr[0]);
  const queue: TTreeNode[] = [root];

  for (let i = 0; i < arr.length; i++) {
    const node = queue.shift();
    if (!node) continue;

    const leftIndex = 2 * i + 1;
    const rightIndex = 2 * i + 2;

    if (leftIndex < arr.length && arr[leftIndex] !== null) {
      node.left = new TTreeNode(arr[leftIndex]);
      queue.push(node.left);
    }

    if (rightIndex < arr.length && arr[rightIndex] !== null) {
      node.right = new TTreeNode(arr[rightIndex]);
      queue.push(node.right);
    }
  }

  return root;
}

export default generateRandomTree;
