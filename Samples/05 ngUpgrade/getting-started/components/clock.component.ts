import {Component, EventEmitter, Inject, Output} from "@angular/core";
import {APP_SERVICE_TOKEN} from "../services/app.service";

@Component({
    selector: "app-clock",
    templateUrl: "./clock.component.html",
})
export class ClockComponent {
    time: Date;

    @Output() onTick: EventEmitter<Date> = new EventEmitter<Date>();

    constructor(@Inject(APP_SERVICE_TOKEN) appService) {
        console.log("ClockComponent.ctor", appService);
        
        this.time = new Date();
    }

    ngOnInit() {
        setInterval(()=> {
            this.time = new Date();

            this.onTick.emit(this.time);
        }, 1000);
    }
}
