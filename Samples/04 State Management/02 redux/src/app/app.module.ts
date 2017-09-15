import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactIndexComponent } from './components/contact-index/contact-index.component';
import {FormsModule} from "@angular/forms";
import {ContactsActions} from "./contacts.actions";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    ContactIndexComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    ContactsActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
