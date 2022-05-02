import { dateStringToDate } from '../utils';
import { GameResult } from '../Enum';

type GameDataType = [Date, string, string, number, number, GameResult, string];

interface DataReader {
  data: string[][];
  read(): void;
}

export class GameReader {
  games: GameDataType[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();

    this.games = this.reader.data.map(
      (row: string[]): GameDataType => [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as GameResult,
        row[6],
      ]
    );
  }
}
