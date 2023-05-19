let set = document.getElementById('set');
let run = document.getElementById('run');
let pause = document.getElementById('stop');
let reset = document.getElementById('reset');

let counterElem = document.getElementById('counter');
let popCont = document.getElementById('popupCont');
let submit = document.getElementById('submit');
let amountElem = document.getElementById('amount');

let counter = 0;
let amount = 0;
let interval;

function onSubmitClick() {
    amount = amountElem.value;
    popCont.style.display = 'none';
}

function setCounter() {
    popCont.style.display = '';
}

function startCounter() {
    interval = setInterval(function () {
        if(counter >= amount) {
            clearInterval(interval);
            interval = null;
            return;
        }
        counter++;
        counterElem.innerHTML = counter;
    }, 1000);
}

function pauseCounter() {
    clearInterval(interval);
}

function resetCounter() {
    clearInterval(interval);
    counter = 0;
    counterElem.innerHTML = counter;
}

set.addEventListener('click', setCounter);
run.addEventListener('click', startCounter);
pause.addEventListener('click', pauseCounter);
reset.addEventListener('click', resetCounter);
submit.addEventListener('click', onSubmitClick);