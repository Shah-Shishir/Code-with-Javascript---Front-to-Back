const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const TIME = document.querySelector(".time");

function runTheClock () {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let hrPosition = hr*30+min*0.5;
    let minPosition = min*6+sec*0.1;
    let secPosition = sec*6;
    time.innerHTML = date;
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

setInterval(runTheClock,1000);