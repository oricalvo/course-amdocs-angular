 class RootController {
    constructor(appService) {
        this.contacts = appService.contacts;
    }

    onClockTick() {
        console.log("onClockTick");
    }
}

appModule.component("appRoot", {
    controller: RootController,
    templateUrl: "app.directive.html",
});
