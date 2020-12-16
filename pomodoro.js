const body = document.querySelector("body");
const timerBox = document.querySelector(".timerBox");
const timer = document.querySelector(".timer")
const startButton = document.querySelector(".startButton");
const pauseButton = document.querySelector(".pauseButton");const stopButton = document.querySelector(".stopButton");

let sec = 60;
let min = Math.floor((sec/60));
let displaySec = sec%60;

timer.innerHTML = `${min}:${displaySec}`;
//timer.innerHTML = `${min}:${sec}`

function startTimer() {

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

function pauseTimer() {
    clearInterval(interval);
}
function stopTimer() {
    clearInterval(interval);
    timer.innerHTML = `${min}:${displaySec}`;
    startButton.removeEventListener("click", startTimer);
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);