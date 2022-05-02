import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from '../src/utils';
import { GameResult } from '../src/Enum';

type GameData = [Date, string, string, number, number, GameResult, string];

export class GameReader extends CsvFileReader<GameData> {
  mapRow(row: string[]): GameData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as GameResult,
      row[6],
    ];
  }
}
