/*
  QUEUE: FIFO (First In First Out) -> unshift / pop
  We add to the front of the array (unshift) and remove from the end (pop)
*/
describe("Queue", () => {
  it("should be easy to implement a queue in TS", () => {
    const queue = [];
    queue.unshift(1);
    queue.unshift(2);
    queue.unshift(3);
    expect(queue.length).toBe(3);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(3);
    expect(queue.length).toBe(0);
  });
});
