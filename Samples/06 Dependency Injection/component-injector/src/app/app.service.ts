import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  counter: number;
  data = "Blabla";

  constructor() {
    console.log("AppService.ctor");

    this.counter = 5;
  }

}
