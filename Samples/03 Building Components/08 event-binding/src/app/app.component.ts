import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = "XXX";

  constructor() {
  }

  change($event) {
    console.log("change", $event);
  }
}
