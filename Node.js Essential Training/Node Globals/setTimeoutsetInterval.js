const totalTime = 5000;
const countTime = 500;
let currentTime = 0;

const myTimeoutFn = () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write("Completed!\n");
    clearInterval(myInterval);
}

const myIntervalFn = () => {
    currentTime += countTime;
    const percentage = Math.floor((currentTime/totalTime)*100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Loading... ${percentage}%`)
}

setTimeout(myTimeoutFn, totalTime);
const myInterval = setInterval(myIntervalFn, countTime);
