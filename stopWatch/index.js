

let seconds = 00;
let ms = 00; // miliseconds
let mins = 00;
let getSeconds = document.querySelector('.seconds');
let getms = document.querySelector('.ms');
let getMins = document.querySelector('.mins');
let btnStart = document.querySelector('.start');
let btnStop = document.querySelector('.stop');
let btnReset = document.querySelector('.reset');
let interval;

btnStart.addEventListener('click', ()  => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10)
})

btnStop.addEventListener('click', () => {
    clearInterval(interval);
})

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    ms = '00';
    seconds = '00';
    mins = '00';
    getSeconds.innerHTML = seconds;
    getms.innerHTML = ms;
    getMins.innerHTML = mins;
})

function startTimer() {
    ms++;
    if (ms <= 9) {
        getms.innerHTML = '0' + ms
    }
    if (ms > 9) {
        getms.innerHTML = ms;
    }
    if (ms > 99) {
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        ms = 0;
        getms.innerHTML = '0' + 0;
    }
    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        mins++;
        getMins.innerHTML = '0' + mins;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if (mins > 9) {
        getSeconds.innerHTML = mins;
    }
}