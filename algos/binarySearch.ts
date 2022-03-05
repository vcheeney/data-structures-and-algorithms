/*
  Binary search recursive (also known as half-interval search, logarithmic search or binary chop)
  https://youtu.be/P3YID7liBug

  Time complexity:
  Best: O(1) if the searched value happens to be the mid point of the original array
  Avg: O(log(n)) because we will at most divide the array log(n) times before finding the value or not
  Worst: O(log(n))
*/

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

export function binarySearchIterative(array: number[], x: number) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === x) {
      return true;
    } else if (x < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}
