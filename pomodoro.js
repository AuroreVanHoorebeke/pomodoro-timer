const body = document.querySelector("body");
const timerBox = document.querySelector(".timerBox");
const timer = document.querySelector(".timer")
const startButton = document.querySelector(".startButton");
const pauseButton = document.querySelector(".pauseButton");const stopButton = document.querySelector(".stopButton");

let userSecChoice=60;

let sec = userSecChoice;
let min = Math.floor((sec/60));
let displaySec = sec%60;

let start = true;

timer.innerHTML = `${min}:${displaySec}`;

function startTimer() {
    if (start == true) {
        start = false;
        console.log("start is " + start);

    function count() {
        min = Math.floor((sec/60));
        displaySec = sec%60;
        console.log(sec);
        console.log(min);

        sec--;

        if (sec == 0) {
            alert("fini!")
            stopTimer();
        }

        timer.innerHTML = `${min}:${displaySec}`;
    }

    interval = setInterval(count, 250);
    }
}

function pauseTimer() {
    clearInterval(interval);
    if(start == false) {
        start = true;
        console.log("start is "+ start);
    }
}
function stopTimer() {
    if(start == false) {
        start = true;
    }
    console.log("start is "+ start);
    clearInterval(interval);

    min = Math.floor((userSecChoice/60));
    displaySec = userSecChoice%60;
    timer.innerHTML = `${min}:${displaySec}`;

    sec = userSecChoice;
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);

