import {Component} from '@angular/core';

const PAGES = ["Small", "Normal", "Large"];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    index: number;

    constructor() {
        this.index = 1;
    }

    get page() {
        return PAGES[this.index];
    }

    smaller() {
        if (this.index == 0) {
            return;
        }

        --this.index;
    }

    larger() {
        if (this.index == 2) {
            return;
        }

        ++this.index;
    }
}
