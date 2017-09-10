import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = "red";
  fontSize = 2;
  fontSizeEm = "2em";

  constructor() {
  }

  change() {
    this.color = "blue";
    this.fontSize = 4;
    this.fontSizeEm = "4em";
  }
}
