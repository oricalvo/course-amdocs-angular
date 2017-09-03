function g() {
    const id = arguments[0];
    const name = arguments[1];

    console.log(id, name);
    console.log(typeof arguments);
    console.log(Array.isArray(arguments));
}

function f(... args) {
    const id = args[0];
    const name = args[1];

    console.log(id, name);
    console.log(typeof args);
    console.log(Array.isArray(args));
}

const func = (...args)=> {
    console.log(args);
};

//f(1, "Ori");
func(1, 2, 3);
