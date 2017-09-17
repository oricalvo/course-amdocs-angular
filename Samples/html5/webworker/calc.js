function calc() {
    console.log("BEGIN");

    const before = new Date();

    while(true) {
        const after = new Date();
        if(after-before > 2500) {
            break;
        }
    }

    console.log("END");
}
