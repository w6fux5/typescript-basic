"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./\u597D\u7684\u5BEB\u6CD5/NumbersCollection");
const CharactersCollection_1 = require("./\u597D\u7684\u5BEB\u6CD5/CharactersCollection");
const LinkedList_1 = require("./\u597D\u7684\u5BEB\u6CD5/LinkedList");
// Numbers Sort
const numbers = new NumbersCollection_1.NumbersCollection([12, 110, -42, 33]);
numbers.sort();
console.log(numbers.data);
// Characters Sort
const characters = new CharactersCollection_1.CharactersCollection('XaekG');
characters.sort();
console.log(characters.data);
// LinkedList
const list = new LinkedList_1.LinkedList(19);
list.append(132);
list.append(1);
list.append(88);
list.sort();
list.print();
