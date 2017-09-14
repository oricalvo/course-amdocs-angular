import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time: Date;

  constructor() {
    this.time = new Date();
  }

  onTimeChanged(time: Date) {
    console.log(time);

    this.time = time;
  }
}
