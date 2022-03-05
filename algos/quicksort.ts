/*
  https://www.youtube.com/watch?v=SLauY6PpjW4

  Time complexity:
  Avg: O(n*log(n))
  Worst: O(log(n)) when using the in-place version 👇
*/

export function quicksortRecursive(arr: number[]) {
  quicksortRec(arr, 0, arr.length - 1);
}

function quicksortRec(arr: number[], left: number, right: number) {
  if (left >= right) {
    return;
  }
  const pivotIndex = Math.floor((left + right) / 2);
  const pivot = arr[pivotIndex];

  const index = partition(arr, left, right, pivot);

  quicksortRec(arr, left, index - 1);
  quicksortRec(arr, index, right);
}

function partition(arr: number[], left: number, right: number, pivot: number) {
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      const temp = arr[left]; // todo check if there is a better way to swap in JS
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return left;
}
