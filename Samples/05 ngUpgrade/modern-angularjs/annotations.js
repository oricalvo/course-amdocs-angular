"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
function Component(options) {
    return function (target) {
        Reflect.defineMetadata("component", options, target);
        return target;
    };
}
exports.Component = Component;
function Module(options) {
    return function (target) {
        Reflect.defineMetadata("module", options, target);
        return target;
    };
}
exports.Module = Module;
function Service(options) {
    return function (target) {
        Reflect.defineMetadata("service", options, target);
        return target;
    };
}
exports.Service = Service;
function bootstrap(element, ModuleClass) {
    var moduleMetadata = Reflect.getMetadata("module", ModuleClass);
    if (!moduleMetadata) {
        return;
    }
    var appModule = angular.module(moduleMetadata.name, []);
    for (var _i = 0, _a = moduleMetadata.components; _i < _a.length; _i++) {
        var comp = _a[_i];
        var compMetadata = Reflect.getMetadata("component", comp);
        if (!compMetadata) {
            continue;
        }
        appModule.component(compMetadata.selector, {
            controller: comp,
            template: compMetadata.template,
        });
    }
    for (var _b = 0, _c = moduleMetadata.services; _b < _c.length; _b++) {
        var service = _c[_b];
        var serviceMetadata = Reflect.getMetadata("service", service);
        if (!serviceMetadata) {
            continue;
        }
        appModule.service(serviceMetadata.name, service);
    }
    angular.bootstrap(element, [appModule.name]);
}
exports.bootstrap = bootstrap;
//# sourceMappingURL=annotations.js.map