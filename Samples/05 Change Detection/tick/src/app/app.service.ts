import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  counter: number;

  constructor() {
    this.counter = 5;
  }

}
