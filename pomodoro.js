const body = document.querySelector("body");
const timerBox = document.querySelector(".timerBox");
const timer = document.querySelector(".timer")
const startButton = document.querySelector(".startButton");
const pauseButton = document.querySelector(".pauseButton");const stopButton = document.querySelector(".stopButton");

let userSecChoice=60*25;

let sec = userSecChoice;
let min = Math.floor((sec/60));
let displaySec = sec%60;

let start = true;

function displayTime(){
    if (displaySec < 10){
        timer.textContent = `${min}:0${displaySec}`;
        if (min < 10 && displaySec < 10){
            timer.textContent = `0${min}:0${displaySec}`;
        }
    }
    else if (min < 10){
        timer.textContent = `0${min}:${displaySec}`;
        if (min < 10 && displaySec < 10){
            timer.textContent = `0${min}:0${displaySec}`;
        }
    }
    else{
        timer.textContent = `${min}:${displaySec}`;
    }
}

displayTime()

function count() {
    min = Math.floor((sec/60));
    displaySec = sec%60;
    console.log(sec);
    console.log(min);

    sec--;
    displayTime();
    if (sec == 0) {
        alert("fini!");
        stopTimer();
    }
}

function startTimer() {
    if (start == true) {
        start = false;
        console.log("start is " + start);

    count();
    interval = setInterval(count, 1000);
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
    displayTime();

    sec = userSecChoice;
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);

