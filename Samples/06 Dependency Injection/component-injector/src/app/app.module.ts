import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, Inject, Injectable, NgModule, ReflectiveInjector} from '@angular/core';

import { AppComponent } from './app.component';
import {AppService} from "./app.service";
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(appService: AppService) {
  }
}
