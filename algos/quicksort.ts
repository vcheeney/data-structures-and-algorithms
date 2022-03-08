/*
  In-place quick sort
  https://www.youtube.com/watch?v=SLauY6PpjW4
  https://www.youtube.com/watch?v=0SkOjNaO1XYv

  Time complexity:
  Avg: O(n*log(n))
  Worst: O(n^2) when for example the array is already sorted and the pivot we
  pick is always the smallest value in the array
*/

export function quicksortRecursive(arr: number[]) {
  quicksortRec(arr, 0, arr.length - 1);
}

function quicksortRec(arr: number[], left: number, right: number) {
  // This section has only one element, therefore already sorted
  if (left >= right) {
    return;
  }

  const index = partition(arr, left, right);
  // The index represents the starting value of the right side
  quicksortRec(arr, left, index - 1);
  quicksortRec(arr, index, right);
}

function partition(arr: number[], left: number, right: number) {
  // First we choose our pivot (any value between left and right)
  const pivotIndex = left;
  const pivot = arr[pivotIndex];

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return left;
}
