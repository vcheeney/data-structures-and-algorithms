export type TreeNode = {
  val: number;
  left?: TreeNode;
  right?: TreeNode;
};

type VisitFunction = (val: number) => void;

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
