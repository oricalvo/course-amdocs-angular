importScripts("calc.js");

console.log(document);

console.log("Worker loaded");

addEventListener("message", function(e) {
    const cmd = e.data;

    if(cmd.type == "CALC") {
        calc();

        postMessage({type: "CALC_DONE"});
    }
});


