import { Analyzer } from '../Summary';
import { GameDataType } from '../types';
import { GameResult } from '../Enum';

export class WinAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(games: GameDataType[]): string {
    let winCount = 0;

    for (let match of games) {
      // 主場勝利
      if (match[1] === this.teamName && match[5] === GameResult.HomeWin) {
        winCount++;
      }

      // 客場勝利
      if (match[2] === this.teamName && match[5] === GameResult.AwayWin) {
        winCount++;
      }
    }
    return `${this.teamName} won [ ${winCount} ] games`;
  }
}
