// 針對不同的參數類型，就需要多一個 if 判斷及相關邏輯，所有的東西都寫在一個 sort Function，這是一個不好的寫法
export class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // 判斷是不是 Array
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }

        // 判斷是不是字串
        if (typeof this.collection === 'string') {
          // ...
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);

sorter.sort();

console.log(sorter.collection);
