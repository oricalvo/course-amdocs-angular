import { Component } from '@angular/core';
import {appStore, Contact} from "./app.store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // contacts: Contact[];

  constructor() {
    // this.contacts = appStore.getState().contacts;
    //
    // appStore.subscribe(()=> {
    //   this.contacts = appStore.getState().contacts
    // });
  }

  get contacts() {
    return appStore.getState().contacts;
  }

  refresh() {
    appStore.dispatch({
      type: "REFRESH",
    })
  }
}
