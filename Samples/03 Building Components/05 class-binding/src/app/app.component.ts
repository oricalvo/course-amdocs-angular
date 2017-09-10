import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isBig = true;
  isSmall = false;

  constructor() {
  }

  change() {
    this.isBig = false;
    this.isSmall = true;
  }
}
