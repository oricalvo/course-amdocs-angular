import {Component, ElementRef, ViewChild} from '@angular/core';
import {ClockComponent} from "./clock/clock.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time: Date;
  @ViewChild("clock1") clock1: ClockComponent;
  @ViewChild("button1") button1: ElementRef;

  constructor() {
    this.time = new Date();
  }

  ngOnInit() {
    console.log(this.clock1);
    var element = this.button1.nativeElement;
    //element.parentElement.removeChild(element);
    //console.log();
  }

  stop() {
    this.clock1.stop();
  }

  onTimeChanged(time: Date) {
    console.log(time);

    this.time = time;
  }
}
