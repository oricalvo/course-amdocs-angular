import {Component} from '@angular/core';
import {AppService} from "./services/app.service";
import {Directory, Item} from "./common/appState";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.load();
  }

  get directory(): Directory {
    return this.appService.state.directory;
  }

  onItemClicked(item: Item) {
    this.appService.activateItem(item);
  }
}
