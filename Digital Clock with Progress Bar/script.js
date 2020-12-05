var hour = document.querySelector('#hour');
var minute = document.querySelector('#minute');
var second = document.querySelector('#second');
var timeFormat = document.querySelector('.time-format');
var abbrebiation = document.querySelector('.abbr');
var switchEl = document.querySelector('.switch');
var progressBar = document.querySelector('.progress-bar');
var format = '24h';

window.addEventListener('load', function() {
    format = localStorage.getItem('format');
    timeFormat.textContent = localStorage.getItem('text');
    if (localStorage.getItem('abbr')) {
        abbrebiation.style.visibility = 'visible';
        abbrebiation.innerText = localStorage.getItem('abbr');
    }
});

switchEl.addEventListener('click', switchFormat);

function switchFormat() {
    var date = new Date();
    var currentHours = date.getHours();
    if (timeFormat.textContent === '24 Hours Format') {
        timeFormat.textContent = '12 Hours Format';
        abbrebiation.style.visibility = 'visible';
        format = '12h';
        window.localStorage.setItem('format', '12h');
        window.localStorage.setItem('text', '12 Hours Format');
        if (currentHours > 12) {
            currentHours -= 12;
            hour.textContent = currentHours < 10 ? ('0' + currentHours) : currentHours;
            abbrebiation.textContent = 'PM';
            window.localStorage.setItem('abbr', 'PM');
        } else {
            abbrebiation.textContent = 'AM';
            window.localStorage.setItem('abbr', 'AM');
        }
        if (currentHours === 12) {
            abbrebiation.textContent = "PM";
        }
    } else {
        timeFormat.textContent = '24 Hours Format';
        abbrebiation.style.visibility = 'hidden';
        format = '24h';
        window.localStorage.setItem('format', '24h');
        window.localStorage.removeItem('abbr');
        if (currentHours > 12) {
            currentHours -= 12;
            hour.textContent = currentHours < 10 ? ('0' + currentHours) : currentHours;
        } else if (currentHours === 0) {
            hour.textContent = '12';
        }
    }
}

function setDigitalClock() {
    var date = new Date();
    var currentHours = date.getHours();
    if (format === '24h') {
        timeFormat.textContent = '24 Hours Format';
    } else {
        timeFormat.textContent = '12 Hours Format';
        if (currentHours > 12) {
            currentHours -= 12;
        }
    }
    hour.textContent = currentHours < 10 ? ('0' + currentHours) : currentHours;
    var currentMinutes = date.getMinutes();
    minute.textContent = currentMinutes < 10 ? ('0' + currentMinutes) : currentMinutes;
    var currentSeconds = date.getSeconds();
    second.textContent = currentSeconds < 10 ? ('0' + currentSeconds) : currentSeconds;
    progressBar.style.width = (currentSeconds/60) * 100 + '%';
}

setInterval(setDigitalClock, 1000);