/*source ancien lab*/

//on creer la carte
/*function creerCarte(montre) {
    $("#montres").append(`
        <li class="card col-12 col-sm-6 col-md-4 col-lg-3 m-2">
        <img src="${montre.image}" class="card-img-top mt-2" alt="${montre.image}"/>
        <div class="card-body">
            <h2 class="card-title">${montre.model}</h2>
            <div class="card-text">
                <p>Mouvement mécanique et ${montre.mouvement}</p>
                <p>Prix : ${montre.prix} USD</p>
                <button type="button" class="btn btn-danger mt-2" onclick="Supprimer(${montre.id})">Delete</button>
            </div>
        </div>
    </li>`)
}
//on charge les donneer du fichier Json. si requette echoue on lance une erreur
fetch('montres.json')
    .then(function (reponse) {
        if (!reponse.ok) {
            //lancer une exeption
            throw new Error("Erreur " + reponse.status)
        }
        return reponse.json()
    })
    .then(function (montres) {
        montres.forEach(function (montre) {
            creerCarte(montre)
        })
    })
    //Attraper et gérer
    .catch(function (erreur) {
        $(".alert").text(erreur.message).removeClass("d-none")
    })

fetch('https://6611bca495fdb62f24edaa80.mockapi.io/api/v1/montres', {
    method: 'GET',
    headers: {'content-type':'application/json'},
}).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
}).then(montres => {
    montres.forEach(function (montre) {
        creerCarte(montre)
    })
}).catch(error => {
    $(".alert").text(erreur.message).removeClass("d-none")
})*/
