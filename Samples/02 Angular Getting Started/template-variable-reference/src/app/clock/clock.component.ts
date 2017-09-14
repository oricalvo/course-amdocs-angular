import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  @Input() time: any;

  @Output() timeChange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() {
    setTimeout(()=> {
      //this.time = "abc";

      this.timeChange.emit(new Date());
    }, 1500);
  }

  stop() {
    console.log("ClockComponent.stop");
  }
}
