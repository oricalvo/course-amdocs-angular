"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("../services/app.service");
var ClockComponent = (function () {
    function ClockComponent(appService) {
        this.onTick = new core_1.EventEmitter();
        console.log("ClockComponent.ctor", appService);
        this.time = new Date();
    }
    ClockComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.time = new Date();
            _this.onTick.emit(_this.time);
        }, 1000);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ClockComponent.prototype, "onTick", void 0);
    ClockComponent = __decorate([
        core_1.Component({
            selector: "app-clock",
            templateUrl: "./clock.component.html",
        }),
        __param(0, core_1.Inject(app_service_1.APP_SERVICE_TOKEN)),
        __metadata("design:paramtypes", [Object])
    ], ClockComponent);
    return ClockComponent;
}());
exports.ClockComponent = ClockComponent;
//# sourceMappingURL=clock.component.js.map