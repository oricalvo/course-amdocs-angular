"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = require("./app.module");
var AppService = (function () {
    function AppService() {
        this.contacts = [
            { "id": 1, "name": "Ori" },
            { "id": 2, "name": "Roni" },
            { "id": 3, "name": "Udi" },
            { "id": 4, "name": "Tommy" },
        ];
    }
    return AppService;
}());
exports.AppService = AppService;
app_module_1.appModule.service("appService", AppService);
//# sourceMappingURL=app.service.js.map