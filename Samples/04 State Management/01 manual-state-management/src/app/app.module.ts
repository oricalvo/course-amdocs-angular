import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactIndexComponent } from './components/contact-index/contact-index.component';
import { ContactNewComponent } from './components/contact-new/contact-new.component';
import {ContactService} from "./services/contact.service";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { FilterComponent } from './components/filter/filter.component';
import {FormsModule} from "@angular/forms";
import {AppService} from "./services/app.service";

@NgModule({
  declarations: [
    AppComponent,
    ContactIndexComponent,
    ContactNewComponent,
    ToolbarComponent,
    ContactListComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    AppService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
