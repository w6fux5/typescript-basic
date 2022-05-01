import { Sorter } from './好的寫法/Sorter';
import { NumbersCollection } from './好的寫法/NumbersCollection';
import { CharactersCollection } from './好的寫法/CharactersCollection';
import { LinkedList } from './好的寫法/LinkedList';

// Numbers Sort
const numbers = new NumbersCollection([12, 110, -42, 33]);
numbers.sort();
console.log(numbers.data);

// Characters Sort
const characters = new CharactersCollection('XaekG');
characters.sort();
console.log(characters.data);

// LinkedList
const list = new LinkedList(19);
list.append(132);
list.append(1);
list.append(88);

list.sort();
list.print();
