import { Component } from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nums: number[] = [];
  showClock: boolean = false;
  counter: number = 0;

  constructor(private appService: AppService) {
    for(let i=0; i<10; i++) {
      this.nums.push(i);
    }
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");

    this.counter++;
  }

  run() {
    console.log("run");

    this.showClock = true;

    // setTimeout(function() {
    // }, 0);

    // for(var i=0; i<100; i++) {
    //   setTimeout(function() {
    //   });
    // }

    // Promise.resolve().then(function() {
    //   setTimeout(function() {
    //     console.log("timeout");
    //   }, 0);
    //
    //   console.log("then");
    // });
    //
    // console.log("after");

    // setTimeout(function() {
    //   console.log("timeout");
    // }, 1000);
  }
}

// function delay(ms) {
//   return new Promise(function(resolve, reject) {
//   });
// }
