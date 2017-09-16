import {Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: "app-contact-new",
    templateUrl: "./contactNew.component.html",
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
