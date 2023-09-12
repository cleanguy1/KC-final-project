let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

alert('مرحبا بك في موقعي سوف اسحب وقت دراستك');
let grade = prompt('اكتب عدد ساعات دراستك التي تريدها');


function startTimer() {
    if (!isRunning) {
        timer = setInterval(updateTimer, 1000);
        isRunning = true;
        document.getElementById("start").textContent = "Pause";
    } else {
        clearInterval(timer);
        isRunning = false;
        document.getElementById("start").textContent = "Resume";
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("start").textContent = "Start";
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("time").innerHTML = "00:00:00";
    document.getElementById("start").innerHTML = "Start";
}

function updateTimer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById("time").textContent = timeString;
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);