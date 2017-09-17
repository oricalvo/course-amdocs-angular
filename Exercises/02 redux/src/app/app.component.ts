import {Component} from '@angular/core';
import {Directory, Item, AppState} from "./common/appState";
import {store} from "./app.store";
import {AppActions} from "./services/app.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 1000;

  constructor(private appActions: AppActions) {
    setTimeout(() => {
      this.counter = 2000;
    }, 2000);
  }

  get state(): AppState {
    return store.getState();
  }

  ngOnInit() {
    store.dispatch(this.appActions.load());
  }

  onItemClicked(item: Item) {
    store.dispatch(this.appActions.activateItem(item));
  }
}
