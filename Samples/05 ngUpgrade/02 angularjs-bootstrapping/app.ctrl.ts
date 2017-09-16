class AppCtrl {
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

interface Contact {
  id: number;
  name: string;
}

appModule.controller("AppCtrl", AppCtrl);
