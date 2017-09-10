import {Component, Sanitizer, SecurityContext} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "My Title";

  constructor(private sanitizer: DomSanitizer) {
    this.title = "<h1>Hello</h1>";
    //this.title = (<any>sanitizer).bypassSecurityTrustScript(this.title)
  }
}
