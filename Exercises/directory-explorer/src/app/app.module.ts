import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { DirectoryExplorerComponent } from './components/directory-explorer/directory-explorer.component';
import {AppService} from "./services/app.service";

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
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
