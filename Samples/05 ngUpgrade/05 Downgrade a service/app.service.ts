import {Injectable} from "@angular/core";

@Injectable()
export class AppService {
    contacts: Contact[];

    constructor() {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
            {"id": 3, "name": "Udi"},
            {"id": 4, "name": "Tommy"},
        ];
    }

    add(contact: Contact) {
        this.contacts.push(contact);
    }
}
