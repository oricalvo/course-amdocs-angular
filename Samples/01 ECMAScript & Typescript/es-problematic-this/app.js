class Timer {
    constructor(interval) {
        this.interval = interval;
        this.id = null;
        this.name2 = "Ori";
    }

    start() {
        //const me = this;

        if(this.id) {
            return;
        }

        console.log(this.name2);

        this.id = setInterval(() => {
            console.log(this.name2);
        }, this.interval);
    }

    stop() {
        if(!this.id) {
            return;
        }

        clearInterval(this.id);
        this.id = null;
    }
}

