"use strict";
/// <reference path="./node_modules/reflect-metadata/Reflect.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var annotations_1 = require("./annotations");
var app_module_1 = require("./app.module");
//angular.bootstrap(document.querySelector("html"), [appModule.name]);
annotations_1.bootstrap(document.querySelector("html"), app_module_1.AppModule);
//# sourceMappingURL=main.js.map