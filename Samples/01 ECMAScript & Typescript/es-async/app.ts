function run(): Promise<number> {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const res = 42;
            resolve(res);
            //reject(new Error("Ooops"));
        }, 1500);
    });

}

function run2(): Promise<number> {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const res = 21;
            resolve(res);
            //reject(new Error("Ooops"));
        }, 500);
    });

}

async function main() {
    try {
        const [res, res2] = await Promise.all([run(), run2()]);
        // const res = await run();
        // const res2 = await run2();
        console.log(res * res2);
    }
    catch(err) {
        console.log(err.message);
    }
}

main();

