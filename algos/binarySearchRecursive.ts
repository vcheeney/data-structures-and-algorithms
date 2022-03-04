// https://youtu.be/P3YID7liBug
export function binarySearchRecursive(
  array: number[],
  x: number,
  left: number,
  right: number
): boolean {
  if (left > right) {
    return false;
  }

  const mid = Math.floor((left + right) / 2);

  if (array[mid] === x) {
    return true;
  } else if (x < array[mid]) {
    return binarySearchRecursive(array, x, left, mid - 1);
  } else {
    return binarySearchRecursive(array, x, mid + 1, right);
  }
}
