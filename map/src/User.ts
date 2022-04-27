import faker from 'faker/dist/faker.js';
import { Mappable } from './Map';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()), // 將字串轉為十進位的數字
      lng: parseFloat(faker.address.longitude()), // 將字串轉為十進位的數字
    };
  }

  markerContent(): string {
    return `User name is ${this.name}`;
  }
}
