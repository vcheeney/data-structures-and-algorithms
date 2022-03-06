/*
     1
    / \
   /   \
  2     \
 / \     3
4   5   / \
       9   \
            8
           / \
          6   7

Inorder: 4 2 5 1 9 3 6 8 7
Preorder: 1 2 4 5 3 9 8 6 7
Postorder: 4 5 2 9 6 7 8 3 1
*/

import {
  traverseInorder,
  traversePostorder,
  traversePreorder,
  TreeNode,
} from "./depthFirstTraversals";

const tree: TreeNode = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
    right: {
      val: 5,
    },
  },
  right: {
    val: 3,
    left: {
      val: 9,
    },
    right: {
      val: 8,
      left: {
        val: 6,
      },
      right: {
        val: 7,
      },
    },
  },
};

describe("Inorder", () => {
  const expected = [4, 2, 5, 1, 9, 3, 6, 8, 7];
  it("should collect the numbers inorder", () => {
    const collected: number[] = [];

    const collect = (val: number) => collected.push(val);

    traverseInorder(tree, collect);

    for (let i = 0; i < expected.length; i++) {
      expect(collected[i] === expected[i]).toBe(true);
    }
  });
});

describe("Preorder", () => {
  const expected = [1, 2, 4, 5, 3, 9, 8, 6, 7];
  it("should collect the numbers preorder", () => {
    const collected: number[] = [];

    const collect = (val: number) => collected.push(val);

    traversePreorder(tree, collect);

    for (let i = 0; i < expected.length; i++) {
      expect(collected[i] === expected[i]).toBe(true);
    }
  });
});

describe("Postorder", () => {
  const expected = [4, 5, 2, 9, 6, 7, 8, 3, 1];
  it("should collect the numbers postorder", () => {
    const collected: number[] = [];

    const collect = (val: number) => collected.push(val);

    traversePostorder(tree, collect);

    for (let i = 0; i < expected.length; i++) {
      expect(collected[i] === expected[i]).toBe(true);
    }
  });
});
