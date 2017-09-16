import {Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: "app-new-contact",
    templateUrl: "./newContact.component.html",
})
export class NewContactComponent {
    name: string;

    @Output() onAdded: EventEmitter<Contact> = new EventEmitter<Contact>();

    constructor() {
    }

    add() {
        const contact: Contact = {
            id: -1,
            name: this.name,
        };

        this.onAdded.emit(contact);
    }
}
