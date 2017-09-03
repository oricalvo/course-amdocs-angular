class Entity {
}

class Contact extends Entity {
    name: string;

    constructor(name: string|number) {
        super();

        if(typeof name == "string") {
            this.name = name;
        }
        else {
            this.name = name.toString();
        }
    }

    www() {
        console.log(this.name);
    }
}

let email: string|undefined;

console.log(email);

// new Contact("Ori");
// new Contact(123);

class Rectangle {
    zzz() {
        console.log("Rect");
    }
}
