// import { GameReader } from './第一種方法(繼承及泛型)/GameReader';
// import { CsvFileReader } from './第二種方法( interface )/CsvFileReader';

// const reader = new CsvFileReader('football.csv');

// reader.read();

import { CsvFileReader } from './第二種方法( interface )/CsvFileReader';
import { GameReader } from './第二種方法( interface )/GameReader';
import { GameResult } from './Enum';

const csvFileReader = new CsvFileReader('football.csv');

const gameReader = new GameReader(csvFileReader);

gameReader.load();

// 統計 Man United 這支隊伍的勝利場數量
let manUnitedWin = 0;

for (let match of gameReader.games) {
  // 主場勝利
  if (match[1] === 'Man United' && match[5] === GameResult.HomeWin) {
    manUnitedWin++;
  }

  // 客場勝利
  if (match[2] === 'Man United' && match[5] === GameResult.AwayWin) {
    manUnitedWin++;
  }
}

console.log(manUnitedWin);
