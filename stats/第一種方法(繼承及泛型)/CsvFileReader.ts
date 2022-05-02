import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];
  constructor(public filename: string) {}

  // 既成的子類需要有 mapRow 方法，用來定義數據要用什麼格式
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      // 根據不同的子類格式化數據
      .map(this.mapRow);
  }
}
