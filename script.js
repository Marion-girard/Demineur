// Génération de la grille de jeu
let plateau = document.querySelector('#plateau');
let loose = document.getElementById('loose')
const caseId = [
    {
        coordonné: [],
        bombe: false,
    }
]


for (let j = 0; j < 10; j++) {

    for (let i = 0; i < 10; i++) {

        plateau.innerHTML += "<div id='" + i + "," + j + "' class='block'></div>";

        caseId.push({ i, j })

    }
    plateau.innerHTML += "<br>"
}
console.log(caseId)


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


const nombreDePieges = 10;
const maxX = 10;
const maxY = 10;
const piegesGeneres = generateTraps(nombreDePieges, maxX, maxY);
console.log("Coordonées des pièges :");
console.log(piegesGeneres);

//Object.assign(caseId, piegesGeneres);

console.log(caseId)

/*const myPlateau = document.querySelectorAll('#plateau')

for (let c = 0; c <  myPlateau.length; c++){
if(caseId.i == piegesGeneres.x && caseId.j == piegesGeneres.y)
{
    console.log("piège")
}
else{" tous va bien"}
}*/
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






const conter = 0;

const myPlateau = document.querySelectorAll('#plateau')
console.log("le plateau :")
console.log(myPlateau)
for (let i = 0; i < myPlateau.length; i++) {

    myPlateau[i].addEventListener('click', async (event) => {



        event.preventDefault();

        // On log l'élément qu'on a cliqué :

        const onClick = await Array(event.target.id)
        let cellOnClick = {
            x: parseInt(onClick[0][0]),
            y: parseInt(onClick[0][2])
        }
        console.log(cellOnClick)
        function chiffreCase() {

            if (piegesGeneres.x == cellOnClick.x - 1) {
                conter++
                console.log("+1")

            }
            if (piegesGeneres.x == cellOnClick.x + 1) {
                conter++
                console.log("+1")
            }
            if (piegesGeneres.y == cellOnClick.y + 1) {
                conter++
                console.log("+1")
            }
            if (piegesGeneres.y == cellOnClick.y - 1) {
                conter++
                console.log("+1")
            }
            if (piegesGeneres.x == cellOnClick.x - 1 && piegesGeneres.y == cellOnClick.y - 1) {
                conter++
                console.log("+1")
            }
            if (piegesGeneres.x == cellOnClick.x - 1 && piegesGeneres.y == cellOnClick.y + 1) {
                conter++
                console.log("+1")
            }
            if (piegesGeneres.x == cellOnClick.x + 1 && piegesGeneres.y == cellOnClick.y + 1) {
                conter++
                console.log("+1")
            }
            if (piegesGeneres.x == cellOnClick.x + 1 && piegesGeneres.y == cellOnClick.y - 1) {
                conter++
                console.log("+1")
            }
            if (piegesGeneres.x == cellOnClick.x && piegesGeneres.y == cellOnClick.y) {
                console.log("+1")
            }
            return console.log("chiffreCase")
        }
        // event.target.style.backgroundColor = "#C4DED5"
        function detectionPiege() {
            for (let b = 0; b < piegesGeneres.length; b++) {

                if (piegesGeneres[b].x == cellOnClick.x && piegesGeneres[b].y == cellOnClick.y) {
                    console.log("Piège")

                    event.target.style.backgroundColor = "#FF0000"
                    clearInterval(timer)
                    return loose.innerHTML = `<h2> C'est Perdu !<h2><a href="" onclick="document.location.reload(false)">Relance Une Partie <i class="fa fa-refresh" aria-hidden="true"></i>
                    </a>`

                }
                else if (piegesGeneres[b].x !== cellOnClick.x && piegesGeneres[b].y !== cellOnClick.y) {
                    console.log("tout va bien")
                    event.target.style.backgroundColor = "#D0D0D0"
                    chiffreCase()

                }
            }
        }
        detectionPiege()
    })
}
// 10


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
// 
document.getElementById("plateau").addEventListener("click", startTimer);