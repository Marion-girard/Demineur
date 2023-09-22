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


const myPlateau = document.querySelectorAll('#plateau')
console.log("le plateau :")
console.log(myPlateau)
for (let i = 0; i < myPlateau.length; i++) {

    myPlateau[i].addEventListener('click', async (event) => {

        let conter = 0;

        event.preventDefault();

        // On log l'élément qu'on a cliqué :

        const onClick = await Array(event.target.id)
        let cellOnClick = {
            x: parseInt(onClick[0][0]),
            y: parseInt(onClick[0][2])
        }
        //console.log(piegesGeneres[1].x)

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
                else if (piegesGeneres[b].x !== cellOnClick.x || piegesGeneres[b].y !== cellOnClick.y) {
                    //console.log("tout va bien")
                    event.target.style.backgroundColor = "#D0D0D0"

                    function chiffreCase() {

                        if (piegesGeneres[b].x === (cellOnClick.x - 1) && cellOnClick.y === piegesGeneres[b].y) {
                            conter++
                            console.log("Bombe à gauche" + conter)

                        }
                        if (piegesGeneres[b].x === (cellOnClick.x + 1) && cellOnClick.y === piegesGeneres[b].y) {
                            conter++
                            console.log("Bombe à droite " + conter)
                        }
                        if (piegesGeneres[b].y === (cellOnClick.y - 1) && cellOnClick.x === piegesGeneres[b].x) {
                            conter++
                            console.log("Bombe en haut" + conter)
                        }

                        if (piegesGeneres[b].y === (cellOnClick.y + 1) && cellOnClick.x === piegesGeneres[b].x) {
                            conter++
                            console.log("Bombe en bas" + conter)
                        }

                        if (piegesGeneres[b].x === cellOnClick.x - 1 && piegesGeneres[b].y === (cellOnClick.y - 1)) {
                            conter++
                            console.log(" diagonal haut gauche" + conter)
                        }
                        if (piegesGeneres[b].x === (cellOnClick.x + 1) && piegesGeneres[b].y === (cellOnClick.y + 1)) {
                            conter++
                            console.log("diagonal bas droite " + conter)
                        }
                        if (piegesGeneres[b].x === (cellOnClick.x - 1) && piegesGeneres[b].y === (cellOnClick.y + 1)) {
                            conter++
                            console.log("diagonal bas gauche " + conter)
                        }
                        if (piegesGeneres[b].x === (cellOnClick.x + 1) && piegesGeneres[b].y === (cellOnClick.y - 1)) {
                            conter++
                            console.log("diagonal haut droite" + conter)
                        }
                        else {

                            console.log(conter)
                        }
                        return conter


                    }
                    chiffreCase()
                    event.target.innerHTML = `<p>${conter}</p>`;


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


