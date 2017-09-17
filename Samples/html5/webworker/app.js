const button = document.querySelector("button");

const worker = new Worker("worker.js");

worker.addEventListener("message", function(e) {
    console.log(e);
});

button.addEventListener("click", function() {
    worker.postMessage({type: "CALC"});
});
