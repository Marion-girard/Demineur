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
    const caseId = i + "-" + j;

    plateau.innerHTML += "<div id='" + i + "-" + j + "' class='block'></div>";
  }
  plateau.innerHTML += "<br>"
}

function generateTraps(nbrTraps, maxX, maxY) {
  const traps = [];

  for (let i = 0; i < nbrTraps; i++) {
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    traps.push({x, y});
  }
  return traps;
}

const nombreDePieges = 10;
const maxX = 10;
const maxY = 10;
const piegesGeneres = generateTraps(nombreDePieges, maxX, maxY);
console.log("Coordonées des pièges :");
console.log(piegesGeneres);