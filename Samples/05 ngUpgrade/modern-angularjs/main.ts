import * as angular from "angular";
import {appModule} from "./app.module";
import {AppComponent} from "./app.component";
import {AppService} from "./app.service";

const components = [
    AppComponent
];

const services = [
    AppService,
];

angular.bootstrap(document.querySelector("html"), [appModule.name]);
