import {Directive, ElementRef, EventEmitter, Injector, NgModule, Output} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeComponent, UpgradeModule} from '@angular/upgrade/static';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NewContactComponent} from "./contactNew.component";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {downgradeComponent} from "@angular/upgrade/static";

const AppServiceProvider = {
    provide: AppService,
    useFactory: function($injector) {
        return $injector.get("appService");
    },
    deps: ['$injector']
};

@Directive({
    selector: 'app-contact-index'
})
export class ContactIndexUpgraded extends UpgradeComponent {
    @Output() onRefresh: EventEmitter<any> = new EventEmitter();

    constructor(elementRef: ElementRef, injector: Injector) {
        super('appContactIndex', elementRef, injector);
    }
}

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        ContactIndexUpgraded,
        NewContactComponent,
    ],
    entryComponents: [
        AppComponent,
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

appModule.directive('appRoot', downgradeComponent({ component: AppComponent }) as angular.IDirectiveFactory);
appModule.directive('appNewContact', downgradeComponent({ component: NewContactComponent }) as angular.IDirectiveFactory);

platformBrowserDynamic().bootstrapModule(AppModule);
