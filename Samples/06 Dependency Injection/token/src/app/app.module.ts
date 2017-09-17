import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, Inject, Injectable, NgModule, ReflectiveInjector} from '@angular/core';

import { AppComponent } from './app.component';
import {AppService} from "./app.service";

const store = {
  id: 5,
  name: "Ori",
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: "store", useValue: store},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

    class B {
    }

    @Injectable()
    class A {
      constructor(b: B) {
      }
    }

    const injector = ReflectiveInjector.resolveAndCreate([
      A,
      B
    ]);

    const a = injector.get(A);
  }
}
