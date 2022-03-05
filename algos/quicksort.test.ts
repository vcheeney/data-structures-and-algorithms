import { quicksortRecursive } from "./quicksort";

describe("quicksort", () => {
  const arr = [1, 15, 6, 9, 3, 42, 21];

  it("should sort the array", () => {
    quicksortRecursive(arr);
    for (let i = 0; i + 1 < arr.length; i++) {
      expect(arr[i] <= arr[i + 1]).toBe(true);
    }
  });
});
