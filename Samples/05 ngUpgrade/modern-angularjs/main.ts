/// <reference path="./node_modules/reflect-metadata/Reflect.d.ts" />

import * as angular from "angular";
import {AppComponent} from "./app.component";
import {AppService} from "./app.service";
import {bootstrap} from "./annotations";
import {AppModule} from "./app.module";

//angular.bootstrap(document.querySelector("html"), [appModule.name]);

bootstrap(document.querySelector("html"), AppModule);
