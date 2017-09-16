import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NewContactComponent} from "./newContact.component";
import {FormsModule} from "@angular/forms";
import {downgradeComponent} from "@angular/upgrade/static";

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
