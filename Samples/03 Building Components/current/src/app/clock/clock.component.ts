import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css'],
    inputs: ['format: xxx'],
    outputs: ['tick: t']
})
export class ClockComponent {
    time: Date;

    format: string = "HH:mm:ss";

    tick: EventEmitter<Date> = new EventEmitter<Date>();

    private intervalId;

    constructor() {
        this.time = new Date();
    }

    ngOnInit() {
        this.intervalId = setInterval(()=> {
            this.time = new Date();

            this.tick.emit(this.time);
        }, 1000);
    }
}

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css'],
    inputs: ['format: xxx'],
    outputs: ['tick: t']
})
export class ClockComponent {
    format: string = "HH:mm:ss";

    tick: EventEmitter<Date> = new EventEmitter<Date>();
}
