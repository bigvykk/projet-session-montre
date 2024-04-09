//stack over flow et w3school et yt pour la source et ancien lab
let $montresContainer = $('#objets');

//CHARGER ET AFFICHER MONTRE
function charger() {
    fetch('https://6611bca495fdb62f24edaa80.mockapi.io/api/v1/montres', {
        method: 'GET',
        headers: {'content-type':'application/json'},
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // Gérer l'erreur
    }).then(montres => {
        montres.forEach(function (montre) {
            afficherMontre(montre);
        });
    }).catch(error => {
        console.error("Erreur lors du chargement des montres:", error);
        $(".alert").text(error.message).removeClass("d-none");
    });
}
//aficher la montre
function afficherMontre(montre) {
    $montresContainer.append(`<div class="col-md-5">
        <div class="card mb-3">
            <div class="card-body">
                <h3 class="card-title">Marque : ${montre.marque}</h3>
                <h5 class="card-text">Modèle : ${montre.model}</h5>
                <h5 class="card-text">Mouvement : ${montre.mouvement}</h5>
                <p class="card-text">Prix : ${montre.prix} USD</p>
                <img src="${montre.image}" class="card-img-top mt-2" alt="${montre.image}">
                <button type="button" class="btn btn-danger mt-2" onclick="Supprimer(${montre.id})">Supprimer</button>
            </div>
        </div>
    </div>`);
}

//execute le document html une fois charger
$(document).ready(function() {
    charger();
});
