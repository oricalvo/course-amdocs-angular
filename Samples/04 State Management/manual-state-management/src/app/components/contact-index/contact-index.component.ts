import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.css']
})
export class ContactIndexComponent implements OnInit {
  constructor(private appService: AppService) {
  }

  ngOnInit() {
  }

  get contacts() {
    return this.appService.state.contacts;
  }
}
