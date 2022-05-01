class Node {
  next: Node | null = null;
  constructor(public value: number) {
    this.value = value;
  }
}

export class LinkedList {
  length: number;
  head: Node;
  tail: Node;

  constructor(value: number) {
    this.head = {
      value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value: number): void {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bound');
    }

    let count = 0;
    let currentNode: Node | null = this.head;

    while (currentNode) {
      if (count === index) {
        return currentNode;
      }

      count++;

      currentNode = currentNode.next;
    }

    throw new Error('Index out of bounds!');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }
    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    let left = this.at(leftIndex);
    let right = this.at(rightIndex);
    let temp = left.value;
    left.value = right.value;
    right.value = temp;
  }

  print(): void {
    if (!this.head) return;
    let arr = [];
    let currentNode: Node | null = this.head;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }
}
