import { Component } from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts = [1,2,3];

  constructor() {
  }

  change() {
    //this.contacts.push(4);
    //this.contacts = [1,2,3,4];

    this.contacts[1] = 777;
  }
}

// function delay(ms) {
//   return new Promise(function(resolve, reject) {
//   });
// }
