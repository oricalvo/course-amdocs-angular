import {Service} from "./annotations";

@Service({
    name: "appService",
})
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

export interface Contact {
    id: number;
    name: string;
}
