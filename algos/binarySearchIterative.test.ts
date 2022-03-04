import { binarySearchIterative } from "./binarySearchIterative";

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
