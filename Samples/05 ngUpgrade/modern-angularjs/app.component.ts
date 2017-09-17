import {AppService} from "./app.service";
import {Component} from "./annotations";

@Component({
    selector: "appRoot",
    template: require("./app.component.html"),
    styles: require("./app.component.css"),
})
export class AppComponent {
    constructor(private appService: AppService) {
    }

    get contacts() {
        return this.appService.contacts;
    }
}
