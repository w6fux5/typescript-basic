import { GameDataType } from './types';

export interface Analyzer {
  run(games: GameDataType[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(games: GameDataType[]): void {
    const output = this.analyzer.run(games);
    this.outputTarget.print(output);
  }
}
