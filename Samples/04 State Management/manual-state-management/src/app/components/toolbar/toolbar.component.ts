import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  refresh() {
    this.appService.reloadContacts();
  }
}
