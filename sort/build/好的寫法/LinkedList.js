"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.value = value;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor(value) {
        super();
        this.head = {
            value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    at(index) {
        if (!this.head) {
            throw new Error('Index out of bound');
        }
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (count === index) {
                return currentNode;
            }
            count++;
            currentNode = currentNode.next;
        }
        throw new Error('Index out of bounds!');
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).value > this.at(rightIndex).value;
    }
    swap(leftIndex, rightIndex) {
        let left = this.at(leftIndex);
        let right = this.at(rightIndex);
        let temp = left.value;
        left.value = right.value;
        right.value = temp;
    }
    print() {
        if (!this.head)
            return;
        let arr = [];
        let currentNode = this.head;
        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr);
    }
}
exports.LinkedList = LinkedList;
