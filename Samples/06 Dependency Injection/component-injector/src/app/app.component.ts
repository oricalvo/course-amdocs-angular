import {Component, Inject} from '@angular/core';
import {AppService} from "./app.service";
import {Logger} from "./logger";

class MyAppServiceOverride {
  data = "XXX";
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: AppService, useClass: MyAppServiceOverride}
  ],
  viewProviders: [
    {provide: AppService, useClass: MyAppServiceOverride}
  ],
})
export class AppComponent {
  constructor(appService: AppService) {
  }
}

