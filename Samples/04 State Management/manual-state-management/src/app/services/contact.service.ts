import { Injectable } from '@angular/core';
import {appStore} from "./app.store";
import {AppState} from "./app.state";

@Injectable()
export class ContactService {

  constructor() {
    this.state.all = this.state.contacts = [
      {id:1, name: "Ori"},
      {id:2, name: "Roni"}
    ];
  }

  get state(): AppState {
    return appStore;
  }

  reload() {
    this.state.all = [
      {id:1, name: "Ori"},
      {id:2, name: "Roni"},
      {id:3, name: "OriC"}
    ];

    this.rerunFilter();
  }

  filter(filter: string) {
    this.state.filterStr = filter;

    this.rerunFilter();
  }

  private rerunFilter() {
    if(!this.state.filterStr) {
      this.state.contacts = this.state.all;
      return;
    }

    this.state.contacts = this.state.all.filter(c => c.name.indexOf(this.state.filterStr)!=-1);
  }
}

