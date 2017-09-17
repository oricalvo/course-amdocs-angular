import * as angular from "angular";

export interface ComponentOptions {
    selector: string;
    template: string;
    styles: string;
}

export function Component(options: ComponentOptions) {
    return function(target) {
        Reflect.defineMetadata("component", options, target);

        return target;
    }
}

export interface ModuleOptions {
    name: string;
    components: any[];
    services: any[];
}

export function Module(options: ModuleOptions) {
    return function(target) {
        Reflect.defineMetadata("module", options, target);

        return target;
    }
}

export interface ServiceOptions {
    name: string;
}

export function Service(options: ServiceOptions) {
    return function(target) {
        Reflect.defineMetadata("service", options, target);

        return target;
    }
}

export function bootstrap(element, ModuleClass) {
    const moduleMetadata: ModuleOptions = Reflect.getMetadata("module", ModuleClass);

    if(!moduleMetadata) {
        return;
    }

    const appModule = angular.module(moduleMetadata.name, []);

    for(let comp of moduleMetadata.components) {
        const compMetadata: ComponentOptions = Reflect.getMetadata("component", comp);

        if(!compMetadata) {
            continue;
        }

        appModule.component(compMetadata.selector, {
            controller: comp,
            template: compMetadata.template,
        });
    }

    for(let service of moduleMetadata.services) {
        const serviceMetadata: ServiceOptions = Reflect.getMetadata("service", service);

        if(!serviceMetadata) {
            continue;
        }

        appModule.service(serviceMetadata.name, service);
    }

    angular.bootstrap(element, [appModule.name])
}
