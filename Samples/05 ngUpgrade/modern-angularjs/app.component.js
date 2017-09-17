"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = require("./app.module");
var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
    }
    Object.defineProperty(AppComponent.prototype, "contacts", {
        get: function () {
            return this.appService.contacts;
        },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
exports.AppComponent = AppComponent;
app_module_1.appModule.component("appRoot", {
    controller: AppComponent,
    template: require("./app.component.html"),
    styles: require("./app.component.css"),
});
//# sourceMappingURL=app.component.js.map