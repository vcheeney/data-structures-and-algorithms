export type TreeNode = {
  val: number;
  left?: TreeNode;
  right?: TreeNode;
};

type VisitFunction = (val: number) => void;

export function treeHeight(tree?: TreeNode): number {
  if (!tree) return 0;
  return Math.max(treeHeight(tree.left), treeHeight(tree.right)) + 1;
}

export function traverseInorder(tree: TreeNode, visit: VisitFunction) {
  if (tree.left) {
    traverseInorder(tree.left, visit);
  }
  visit(tree.val);
  if (tree.right) {
    traverseInorder(tree.right, visit);
  }
}

export function traversePreorder(tree: TreeNode, visit: VisitFunction) {
  visit(tree.val);
  if (tree.left) {
    traversePreorder(tree.left, visit);
  }
  if (tree.right) {
    traversePreorder(tree.right, visit);
  }
}

export function traversePostorder(tree: TreeNode, visit: VisitFunction) {
  if (tree.left) {
    traversePostorder(tree.left, visit);
  }
  if (tree.right) {
    traversePostorder(tree.right, visit);
  }
  visit(tree.val);
}

export function traverseLevelorder(tree: TreeNode, visit: VisitFunction) {
  const queue: TreeNode[] = [tree];
  while (queue.length > 0) {
    const node = queue.pop() as TreeNode;
    visit(node.val);
    if (node.left) {
      queue.unshift(node.left);
    }
    if (node.right) {
      queue.unshift(node.right);
    }
  }
}

export function traverseLevelorderRecursive(
  tree: TreeNode,
  visit: VisitFunction
) {
  for (let level = 1; level <= treeHeight(tree); level++) {
    visitCurrentLevel(level, visit, tree);
  }
}

function visitCurrentLevel(
  level: number,
  visit: VisitFunction,
  node?: TreeNode
) {
  if (!node) {
    return;
  }
  if (level === 1) {
    visit(node.val);
  } else if (level > 1) {
    visitCurrentLevel(level - 1, visit, node.left);
    visitCurrentLevel(level - 1, visit, node.right);
  }
}
