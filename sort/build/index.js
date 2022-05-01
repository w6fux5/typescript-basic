"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./\u597D\u7684\u5BEB\u6CD5/Sorter");
const LinkedList_1 = require("./\u597D\u7684\u5BEB\u6CD5/LinkedList");
// Numbers Sort
// const numbers = new NumbersCollection([12, 110, -42, 33]);
// const numberSorter = new Sorter(numbers);
// numberSorter.sort();
// console.log(numbers.data);
// Characters Sort
// const characters = new CharactersCollection('XaekG');
// const charactersSorter = new Sorter(characters);
// charactersSorter.sort();
// console.log(characters.data);
// LinkedList
const list = new LinkedList_1.LinkedList(19);
list.append(132);
list.append(1);
list.append(88);
const listSorter = new Sorter_1.Sorter(list);
listSorter.sort();
list.print();
