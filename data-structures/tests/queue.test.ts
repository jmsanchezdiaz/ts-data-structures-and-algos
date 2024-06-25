import Queue from "../queue";

describe("Queue", () => {
  test("Operations tests", () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.length).toBe(3);

    expect(queue.peek()).toBe(1);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.length).toBe(0);
    expect(queue.dequeue()).toBe(null);
    expect(queue.length).toBe(0);
  });
});
