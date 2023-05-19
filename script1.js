document.addEventListener("DOMContentLoaded", function() {
    let centre = document.querySelector(".centre");
    let centre_int = Number.parseInt(centre.textContent);

    document.body.style.background = "black";
    document.body.style.color = "white";

    let interval = 1000;
    let loop = 0;

    let stop_num = prompt("Enter the number that you want this program to count to");
    let stop_num_int = Number.parseInt(stop_num);
    setTimeout(() => {
        console.log("Running....")
    }, 1000);

    let stop = document.querySelector(".stop");
    stop.addEventListener("click", function() {
        reset.style.boxShadow = "";
        stop.style.boxShadow = "inset 0 0 0 4px black";
        run.style.boxShadow = "";

        console.log("Stopped......")

        clearInterval(Timer);
        clearInterval(Timering);
    });


    let run = document.querySelector(".run");
    run.addEventListener("click", function(running) {
        reset.style.boxShadow = "";
        stop.style.boxShadow = "";
        run.style.boxShadow = "inset 0 0 0 4px black";
        clearInterval(Timer);
        clearInterval(Timering);
        console.log("Running....")
        loop = 0;
        centre_int = Number.parseInt(centre.textContent);
        Timering = setInterval(() => {
            if (stop_num_int === 0) {
                clearInterval(Timer);
                clearInterval(Timering);
                centre_int = centre_int - 1;
                centre.innerHTML = centre_int;
            }
            if (isNaN(stop_num_int)) {
                clearInterval(Timer);
                clearInterval(Timering);
                centre_int = centre_int - 1;
                centre.innerHTML = centre_int;
            }
            if (run) {
            }
            loop++;
            centre_int++;
            centre.innerHTML = centre_int;
            if (loop === stop_num_int) {
                clearInterval(Timering);
            }
        }, interval);
    });

    let Timer = setInterval(() => {
        run.style.boxShadow = "inset 0 0 0 4px black"
        if (stop_num_int === 0) {
            clearInterval(Timer);
            centre_int = centre_int - 1;
            centre.innerHTML = centre_int;
        }
        loop++;
        centre.innerHTML = centre_int; // update the element value first
        centre_int = centre_int + 1; // then increment the value
        if (loop === stop_num_int + 1) {
            clearInterval(Timer);
        }
    }, interval);

    let Timering;
    
    let reset = document.querySelector(".reset");
    reset.addEventListener("click", function() {
        clearInterval(Timer);
        clearInterval(Timering);

        console.log("Resetted......")

        centre_int = 0
        centre.innerHTML = 0
        loop = 0 

        reset.style.boxShadow = "inset 0 0 0 4px black";
        stop.style.boxShadow = "";
        run.style.boxShadow = "";
    })
})