import { Component } from '@angular/core';
import {Contact} from "./contact-list/contact-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myContacts: Contact[];

  ngOnInit() {
    this.myContacts = [
      {id:1, name: "Ori"},
      {id:2, name: "Roni"},
    ];

  }

  onContactDeleted(contact: Contact) {
    const index = this.myContacts.findIndex(c=>c.id==contact.id);
    if(index!=-1) {
      this.myContacts.splice(index, 1);
    }
  }
}
