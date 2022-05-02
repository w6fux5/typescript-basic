import { GameReader } from './GameReader';
import { Summary } from './Summary';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { ConsoleReport } from './report/ConsoleReport';

const gameReader = GameReader.fromCsv('football.csv');

gameReader.load();

const summary = new Summary(new WinAnalysis('Man United'), new ConsoleReport());

summary.buildAndPrintReport(gameReader.games);
