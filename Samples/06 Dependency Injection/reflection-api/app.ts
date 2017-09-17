class A {
}

function XXX() {
    return function(target) {
        return target;
    }
}

@XXX()
class B {
    constructor(a: A) {
    }
}


