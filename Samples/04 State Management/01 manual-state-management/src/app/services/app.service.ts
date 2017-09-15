import { Injectable } from '@angular/core';
import {ContactService} from "./contact.service";
import {appStore} from "./app.store";
import {AppState} from "./app.state";

@Injectable()
export class AppService {

  constructor(private contactService: ContactService) { }

  get state(): AppState {
    return appStore;
  }

  reloadContacts() {
    this.contactService.reload();
  }

  filterContacts(filter: string) {
    this.contactService.filter(filter);
  }
}
