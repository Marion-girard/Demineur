

document.getElementById("btn").addEventListener('click', function(event) {
    console.log("je clique")
    event.preventDefault();
// On log l'élément qu'on a cliqué :
console.log(event.target);

    

    });