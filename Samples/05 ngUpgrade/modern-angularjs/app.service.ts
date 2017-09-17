import {appModule} from "./app.module";

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
}

appModule.service("appService", AppService);

export interface Contact {
    id: number;
    name: string;
}
