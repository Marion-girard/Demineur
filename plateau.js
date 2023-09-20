let timer;
let timerIsRunning = false;

function startTimer() {
    if (!timerIsRunning) {
        let seconds = 0;
        let minutes = 0;

        timer = setInterval(function () {
            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
            const displaySeconds = seconds < 10 ? "0" + seconds : seconds;

            document.getElementById("timerDisplay").textContent = `${displayMinutes}:${displaySeconds}`;
        }, 1000);

        timerIsRunning = true;
    }
}

document.getElementById("startButton").addEventListener("click", startTimer);

let plateau = document.querySelector('#plateau');

for (let j = 0; j < 10; j++) {

  for (let i = 0; i < 10; i++) {
    plateau.innerHTML += "<div id='" + i + "-" + j + "' class='block'></div>";
  }
  plateau.innerHTML += "<br>"
}