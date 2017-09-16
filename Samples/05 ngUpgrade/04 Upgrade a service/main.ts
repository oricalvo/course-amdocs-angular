import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NewContactComponent} from "./newContact.component";
import {FormsModule} from "@angular/forms";
import {downgradeComponent} from "@angular/upgrade/static";

const AppServiceProvider = {
    provide: AppService,
    useFactory: function($injector) {
        return $injector.get("appService");
    },
    deps: ['$injector']
};

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        FormsModule,
    ],
    declarations: [
        NewContactComponent,
    ],
    entryComponents: [
        NewContactComponent,
    ],
    providers: [
        AppServiceProvider,
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) {
    }

    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, ['myApp'], { strictDi: true });
    }
}

appModule.directive('appNewContact', downgradeComponent({ component: NewContactComponent }) as angular.IDirectiveFactory);

platformBrowserDynamic().bootstrapModule(AppModule);
