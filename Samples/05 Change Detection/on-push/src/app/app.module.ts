import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {AppService} from "./app.service";
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(applicationRef: ApplicationRef) {
    const tick = applicationRef.tick;

    applicationRef.tick = function() {
      const before = performance.now();

      const retVal = tick.apply(this, arguments);

      const after = performance.now();

      console.log("Tick: ", (after - before));

      return retVal;
    }
  }
}
