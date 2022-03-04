// https://youtu.be/P3YID7liBug
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
