
import {InjectionToken, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {downgradeComponent, UpgradeModule} from "@angular/upgrade/static";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {ClockComponent} from "./components/clock.component";
import {APP_SERVICE_TOKEN} from "./services/app.service";

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
    ],
    declarations: [
        ClockComponent,
    ],
    entryComponents: [
        ClockComponent,
    ],
    providers: [
        {
            provide: APP_SERVICE_TOKEN,
            useFactory: function($injector) {
                return $injector.get("appService")
            },
            deps: ["$injector"],
        }
    ]
})
class AppModule {
    constructor(private upgradeModule: UpgradeModule) {
    }

    ngDoBootstrap() {
        this.upgradeModule.bootstrap(document.querySelector("html"), ["myApp"]);
    }
}

appModule.directive("appClock", <any>downgradeComponent({
    component: ClockComponent
}));


platformBrowserDynamic().bootstrapModule(AppModule);

