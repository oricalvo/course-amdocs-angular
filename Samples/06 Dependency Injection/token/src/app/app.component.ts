import {Component, Inject} from '@angular/core';
import {AppService} from "./app.service";
import {Logger} from "./logger";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject("store") store) {
    //console.log("xxx");
    Logger.log("store", store);
  }
}
