import {Component} from '@angular/core';

const PAGES = ["Small", "Normal", "Large"];

interface Contact {
    id: number;
    name: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    index: number;
    contacts: Contact[];

    constructor() {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
            {"id": 3, "name": "Udi"},
            {"id": 4, "name": "Tommy"},
        ];
    }

    remove(index: number) {
        this.contacts.splice(index, 1);
    }
}
