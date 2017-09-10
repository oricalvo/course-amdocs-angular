import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1: number;
  num2: number;
  result: number;
  title = "<h1>XXX</h1><script>alert('xxx')</script>";
  isLarge = true;

  constructor() {
  }

  calc() {
    //console.log(this.num1);
    //console.log(this.num2);
    this.result = this.num1*1 + this.num2*1;
  }

  getResult() {
    console.log("getResult");

    ++this.result;

    return this.result;
  }

  change(xxx: Event) {
    console.log(xxx);

    this.isLarge = false;
  }
}
