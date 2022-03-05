import { binarySearchIterative, binarySearchRecursive } from "./binarySearch";

describe("binarySearchRecursive", () => {
  const arr = [3, 8, 10, 14, 15, 26, 50, 54, 78, 104];

  it("should return true for a present value", () => {
    expect(binarySearchRecursive(arr, 3, 0, arr.length - 1)).toBe(true);
    expect(binarySearchRecursive(arr, 14, 0, arr.length - 1)).toBe(true);
    expect(binarySearchRecursive(arr, 15, 0, arr.length - 1)).toBe(true);
    expect(binarySearchRecursive(arr, 104, 0, arr.length - 1)).toBe(true);
  });

  it("should return false for an absent value", () => {
    expect(binarySearchRecursive(arr, -5, 0, arr.length - 1)).toBe(false);
    expect(binarySearchRecursive(arr, 5, 0, arr.length - 1)).toBe(false);
    expect(binarySearchRecursive(arr, 13, 0, arr.length - 1)).toBe(false);
    expect(binarySearchRecursive(arr, 120, 0, arr.length - 1)).toBe(false);
  });
});

describe("binarySearchIterative", () => {
  const arr = [3, 8, 10, 14, 15, 26, 50, 54, 78, 104];

  it("should return true for a present value", () => {
    expect(binarySearchIterative(arr, 3)).toBe(true);
    expect(binarySearchIterative(arr, 14)).toBe(true);
    expect(binarySearchIterative(arr, 15)).toBe(true);
    expect(binarySearchIterative(arr, 104)).toBe(true);
  });

  it("should return false for an absent value", () => {
    expect(binarySearchIterative(arr, -5)).toBe(false);
    expect(binarySearchIterative(arr, 5)).toBe(false);
    expect(binarySearchIterative(arr, 13)).toBe(false);
    expect(binarySearchIterative(arr, 120)).toBe(false);
  });
});
