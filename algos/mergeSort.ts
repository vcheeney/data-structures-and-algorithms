/*
  https://www.youtube.com/watch?v=KF2j-9iSf4Q

  Uses the divide-and-conquer concept

  Time complexity:
  Avg: O(n*log(n))
  Worst: O(n*log(n))

  Because we go over each element of the array (n), every time we divide the array
  and merge each half (log(n))
  https://static.studytonight.com/data-structures/images/merge-sort-working.png

  Space complexity:
  O(n) because we need to copy elements into a new array...
*/

export function mergeSort(array: number[]) {
  mergeSortRec(array, 0, array.length - 1);
}

function mergeSortRec(array: number[], leftStart: number, rightStart: number) {
  // If the left start is after or equal to the right start, there are no numbers to sort
  if (leftStart >= rightStart) {
    return;
  }

  // Find the mid point
  const mid = Math.floor((leftStart + rightStart) / 2);

  // Soft the left side
  mergeSortRec(array, leftStart, mid);

  // Sort the right side
  mergeSortRec(array, mid + 1, rightStart);

  // Merge the halves
  mergeHalves(array, leftStart, rightStart);
}

function mergeHalves(array: number[], leftStart: number, rightEnd: number) {
  const temp = [];
  const leftEnd = Math.floor((rightEnd + leftStart) / 2);
  const rightStart = leftEnd + 1;

  let left = leftStart;
  let right = rightStart;
  let mergeIndex = leftStart;

  while (left <= leftEnd && right <= rightEnd) {
    if (array[left] < array[right]) {
      temp[mergeIndex] = array[left];
      left++;
    } else {
      temp[mergeIndex] = array[right];
      right++;
    }
    mergeIndex++;
  }

  // Transfer the remainder already sorted elements
  // (either the right or left part will have any)
  for (let i = left; i <= leftEnd; i++) {
    temp[mergeIndex] = array[i];
    mergeIndex++;
  }

  for (let i = right; i <= rightEnd; i++) {
    temp[mergeIndex] = array[i];
    mergeIndex++;
  }

  // Copy the elements back into the original array
  for (let i = leftStart; i <= rightEnd; i++) {
    array[i] = temp[i];
  }
}

const arr = [1, 15, 6, 9, 3, 42, 21];
mergeSort(arr);
