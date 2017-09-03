import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[];
  @Output() contactDeleted: EventEmitter<Contact> = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit() {
  }

  remove(contact: Contact) {
    this.contactDeleted.emit(contact);
  }
}

export interface Contact {
  id: number;
  name: string;
}
