import {Component, EventEmitter, Output} from "@angular/core";
import {AppService} from "./app.service";

@Component({
    selector: "app-new-contact",
    templateUrl: "./newContact.component.html",
})
export class NewContactComponent {
    name: string;

    constructor(private appService: AppService) {
    }

    add() {
        const contact: Contact = {
            id: -1,
            name: this.name,
        };

        this.appService.add(contact);
    }
}
