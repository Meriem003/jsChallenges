let timer= document.getElementById('timer');
let count = 10;

function Timer() {
    if (count > 0) {
        timer.textContent = count;
        count--;
    } else {
        timer.textContent = "Temps écoulé ";
        clearInterval(Interval);
    }
}
let Interval = setInterval(Timer, 1000);