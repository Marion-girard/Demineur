// Génération de la grille de jeu

let plateau = document.querySelector('#plateau');

for (let j = 0; j < 10; j++) {

    for (let i = 0; i < 10; i++) {

        plateau.innerHTML += "<div id='" + i + "," + j + "' class='block'></div>";

    }
    plateau.innerHTML += "<br>"
}

let timer;
let timerIsRunning = false;

// Timer

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

// Génération des pièges

function generateTraps(nbrTraps, maxX, maxY) {
    const traps = [];

    for (let i = 0; i < nbrTraps; i++) {
        const x = Math.floor(Math.random() * maxX);
        const y = Math.floor(Math.random() * maxY);
        traps.push({ x, y });
    }
    console.log(traps[0])
    return traps;
}

const nombreDePieges = parseInt(prompt("Veuillez choisir le nombre de piège sur la grille :"));
const maxX = 10;
const maxY = 10;
const piegesGeneres = generateTraps(nombreDePieges, maxX, maxY);
console.log("Coordonées des pièges :");
console.log(piegesGeneres);


//changement de couleur des case
/*const block = document.getElementById("0-0");
const block1 = document.getElementById("1-0");
const block2 = document.getElementById("2-0");

const block3 = document.getElementById("3-0");

block1.addEventListener('click', function(event) {
    console.log("je clique")
    event.preventDefault();
    // On log l'élément qu'on a cliqué :
    console.log(event.target);
    
    block1.style.backgroundColor = "#C4DED5"
});*/

const myPlateau = document.querySelectorAll('#plateau')
console.log("le plateau :")
console.log(myPlateau)

for (let i = 0; i < myPlateau.length; i++) {
    for (let b = 0; b < piegesGeneres.length; b++) {

        myPlateau[i].addEventListener('click', async (event) => {


            event.preventDefault();

            // On log l'élément qu'on a cliqué :

            const onClick = await Array(event.target.id)
            let cellOnClick = {
                x: parseInt(onClick[0][0]),
                y: parseInt(onClick[0][2])
            }
            console.log(cellOnClick)
            // event.target.style.backgroundColor = "#C4DED5"


            console.log(piegesGeneres[b])



            if (piegesGeneres[b].x == cellOnClick.x && piegesGeneres[b].y == cellOnClick.y) {
                event.target.style.backgroundColor = "#FF0000"
                console.log("Piège")
                alert("Vous avez perdu");

            }
            else {
                event.target.style.backgroundColor = "#C4DED5"
                console.log("tout va bien")
            }

        })
    }
}

// 10
