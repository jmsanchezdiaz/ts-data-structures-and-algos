export interface Node<T> {
  value: T;
  next: Node<T> | null;
}

export default class LinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private length: number = 0;

  // O(1)
  append(value: T): void {
    const node = { value: value, next: null };

    this.length++;
    if (!this.head || !this.tail) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  // O(1)
  preappend(value: T): void {
    const node: Node<T> = { value: value, next: null };

    this.length++;
    if (!this.head || !this.tail) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  // O(N) based on LL length
  insertAt(value: T, position: number): void {
    if (position < 0 || position > this.length) return;

    if (position === 0) {
      this.preappend(value);
      return;
    }
    if (position === this.length) {
      this.append(value);
      return;
    }

    let node: Node<T> = { value: value, next: null };
    let temp: Node<T> | null = this.head;
    let i = 0;
    while (temp && i + 1 < position) {
      temp = temp.next;
      i++;
    }

    if (temp) {
      node.next = temp.next;
      temp.next = node;
      this.length++;
    }
  }

  deleteAt(position: number): Node<T> | null {
    if (position < 0 || position > this.length) return null;
    // Edge cases
    if (position === 0) {
      const deleted = this.head;
      this.head = deleted?.next || null;
      this.length--;
      return deleted;
    }

    if (position === this.length) {
      const deleted = this.tail;
      this.tail = deleted?.next || null;
      this.length--;
      return deleted;
    }

    let temp: Node<T> | null = this.head;
    let i = 0;
    let prev = this.head;

    while (i < position) {
      prev = temp || null;
      temp = temp?.next || null;
      i++;
    }

    if (prev) {
      prev.next = temp?.next || null;

      this.length--;
      return temp;
    }

    return null;
  }

  // O(N)
  search(value: T): Node<T> | null {
    if (!this.head || !this.tail) return null;

    let temp: Node<T> | null = this.head;

    while (temp) {
      if (temp.value === value) return temp;
      temp = temp.next;
    }

    return null;
  }

  // O(N)
  print() {
    let temp = this.head;
    let parsed = "";
    if (!temp) {
      console.log("Empty list");
      return;
    }
    while (temp !== null) {
      parsed += "(" + temp.value + ")";
      if (temp.next) {
        parsed += "->";
      }
      temp = temp.next;
    }
    parsed += " - length: " + this.length;
    console.log(parsed);
  }
}
