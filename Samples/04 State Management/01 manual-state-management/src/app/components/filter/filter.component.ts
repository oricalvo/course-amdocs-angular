import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filter: string;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  run() {
    this.appService.filterContacts(this.filter);
  }
}
