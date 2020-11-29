var hour = document.querySelector("#hour");
var minute = document.querySelector("#minute");
var second = document.querySelector("#second");
var timeFormat = document.querySelector(".time-format");
var abbrebiation = document.querySelector(".abbr");
var switchEl = document.querySelector(".switch");
var progressBar = document.querySelector(".progress-bar");
var flag = false;
var format = "24h";

switchEl.addEventListener("click", switchFormat);

function switchFormat() {
    var date = new Date();
    var currentHours = date.getHours();
    if (timeFormat.textContent === "24 Hours Format") {
        timeFormat.textContent = "12 Hours Format";
        abbrebiation.style.visibility = "visible";
        if (currentHours > 12) {
            currentHours -= 12;
            hour.textContent = currentHours < 10 ? ('0' + currentHours) : currentHours;
            abbrebiation.textContent = "PM";
        } else {
            abbrebiation.textContent = "AM";
            if (currentHours === 0) {
                hour.textContent = "12";
                format = "12h";
            }
        }
    } else {
        timeFormat.textContent = "24 Hours Format";
        abbrebiation.style.visibility = "hidden";
        if (currentHours > 12) {
            currentHours -= 12;
            hour.textContent = currentHours < 10 ? ('0' + currentHours) : currentHours;
        } else if (currentHours === 0) {
            hour.textContent = "12";
            format = "12h";
        }
    }
}

function setDigitalClock() {
    var date = new Date();
    if (format === "24h") {
        var currentHours = date.getHours();
        hour.textContent = currentHours < 10 ? ('0' + currentHours) : currentHours;
    }
    var currentMinutes = date.getMinutes();
    minute.textContent = currentMinutes < 10 ? ('0' + currentMinutes) : currentMinutes;
    var currentSeconds = date.getSeconds();
    second.textContent = currentSeconds < 10 ? ('0' + currentSeconds) : currentSeconds;
    progressBar.style.width = (currentSeconds/60) * 750 + "px";
    if (!flag) {
        timeFormat.textContent = "24 Hours Format";
        flag = true;
    }
}

setInterval(setDigitalClock, 1000);