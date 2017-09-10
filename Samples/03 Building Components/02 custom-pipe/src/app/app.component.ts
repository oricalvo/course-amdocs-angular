import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = null;
  obj = {
    id: 1,
    name: "Ori"
  }
  birthday: Date;

  constructor() {
    this.birthday = new Date();
  }
}
