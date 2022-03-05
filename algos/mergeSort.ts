/*
  Merge sort
  https://www.youtube.com/watch?v=KF2j-9iSf4Q

  Uses the divide-and-conquer concept

  Time complexity:
  Best: O(n*log(n))
  Avg: O(n*log(n))
  Worst: O(n*log(n))

  Because we go over each element of the array (n), every time we divide the array
  and merge each half (log(n))
  https://static.studytonight.com/data-structures/images/merge-sort-working.png

  Space complexity:
  O(n) because we need to copy elements into a new array...
*/

export function mergeSort(array: number[]): number[] {
  if (array.length === 1) {
    return array;
  } else {
    const mid = Math.floor(array.length / 2);
    const leftSide = array.slice(0, mid); // 0 to mid - 1
    const rightSide = array.slice(mid); // mid to array.length - 1
    return merge(mergeSort(leftSide), mergeSort(rightSide));
  }
}

function merge(leftArray: number[], rightArray: number[]) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  return [
    ...result,
    ...leftArray.slice(leftIndex),
    ...rightArray.slice(rightIndex),
  ];
}
