import {appModule} from "./app.module";
import {AppService} from "./app.service";

export class AppComponent {
    constructor(private appService: AppService) {
    }

    get contacts() {
        return this.appService.contacts;
    }
}

appModule.component("appRoot", <any>{
    controller: AppComponent,
    template: require("./app.component.html"),
    styles: require("./app.component.css"),
});
