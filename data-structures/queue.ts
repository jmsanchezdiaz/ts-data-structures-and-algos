export interface QNode<T> {
  value: T;
  next: QNode<T> | null;
}

export default class Queue<T> {
  private head: QNode<T> | null = null;
  private tail: QNode<T> | null = null;
  public length: number = 0;

  dequeue(): T | null {
    if (!this.head || !this.tail) return null;
    this.length--;
    const head = this.head;
    this.head = this.head.next;

    head.next = null;
    return head.value;
  }

  enqueue(value: T) {
    const node = {
      value,
      next: null
    };
    this.length++;
    if (!this.head || !this.tail) {
      this.head = this.tail = node;
      return;
    }

    const tail = this.tail;

    tail.next = node;
    this.tail = node;
  }

  peek(): T | null {
    return this.head?.value || null;
  }
}
