class AppCtrl {
    static $inject = ["appService"];

    constructor(private appService: AppService) {
    }

    onAdded(contact) {
        console.log("onAdded", contact);

        this.appService.add(contact);
    }

    get contacts() {
        return this.appService.contacts;
    }
}

interface Contact {
  id: number;
  name: string;
}

appModule.controller("AppCtrl", AppCtrl);
