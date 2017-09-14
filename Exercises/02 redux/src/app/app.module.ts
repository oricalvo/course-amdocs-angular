import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { DirectoryExplorerComponent } from './components/directory-explorer/directory-explorer.component';
import {AppActions} from "./services/app.actions";

@NgModule({
  declarations: [
    AppComponent,
    DirectoryExplorerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    AppActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
