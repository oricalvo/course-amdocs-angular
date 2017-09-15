import { Component, OnInit } from '@angular/core';
import {Contact, store} from "../../app.store";
import {ContactsActions} from "../../contacts.actions";

@Component({
  selector: 'app-contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.css']
})
export class ContactIndexComponent implements OnInit {
  constructor(private contactsActions: ContactsActions) {
  }

  ngOnInit() {
  }

  refresh() {
    store.dispatch(this.contactsActions.reload(new Date()));
  }

  get contacts(): Contact[] {
    return store.getState().contacts;
  }
}
