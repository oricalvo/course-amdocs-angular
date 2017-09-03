class Contact {
    id: number;

    constructor() {
        this.id = 10;
    }

    dump() {
        console.log(this.id);
    }
}

var x = new Contact();
x.dump();

