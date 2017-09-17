import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  email: string;
  @ViewChild("form") form: NgForm;

  ngOnInit() {
    console.log(this.form);
  }

  add() {
    if(!this.form.valid) {
      console.log("INVALID");
      return;
    }

    console.log("VALID");
  }
}
