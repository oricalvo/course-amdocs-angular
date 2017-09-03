import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SiteMenuComponent } from './site-menu/site-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    ContactListComponent,
    SiteMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
