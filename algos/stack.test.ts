/*
  STACK: LIFO (Last In First Out) -> push / pop
  We add to the end of the array (push) and remove from the end (pop)
*/
describe("Stack", () => {
  it("should be easy to implement a stack in TS", () => {
    const stack = [];
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.length).toBe(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.length).toBe(0);
  });
});

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Array.prototype.unshift()
  Adds one or more elements to the front of an array, and returns the new length of the array.

  // before: arr == [ 1 2 ]
  arr.unshift(5)
  // after: arr == [ 5 1 2 ]

Array.prototype.shift()
  Removes the first element from an array and returns that element.

  // before: arr == [ 5 1 2 ]
  const res = arr.shift()
  // after: arr == [ 1 2 ]
  //        res === 5


Array.prototype.push()
  Adds one or more elements to the end of an array, and returns the new length of the array.

  // before: arr == [ 1 2 ]
  arr.push(5)
  // after: arr == [ 1 2 5 ]

Array.prototype.pop()
  Removes the last element from an array and returns that element.

  // before: arr == [ 5 1 2 ]
  const res = arr.pop()
  // after: arr == [ 5 1 ]
  //        res === 2
*/
