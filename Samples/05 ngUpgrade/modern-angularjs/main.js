"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var app_module_1 = require("./app.module");
var app_component_1 = require("./app.component");
var app_service_1 = require("./app.service");
var components = [
    app_component_1.AppComponent
];
var services = [
    app_service_1.AppService,
];
angular.bootstrap(document.querySelector("html"), [app_module_1.appModule.name]);
//# sourceMappingURL=main.js.map