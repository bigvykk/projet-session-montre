//source ancien labo
/*source ancien lab*/

//on creer la carte
function creerCarte(montre) {
    $("#montres").append(`
        <li class="card col-12 col-sm-6 col-md-4 col-lg-5 m-2">
        <img src="${montre.image}" class="card-img-top mt-2" alt="${montre.image}"/>
        <div class="card-body">
            <h2 class="card-title">${montre.model}</h2>
            <div class="card-text">
                <button type="button" onclick="Supprimer(${montre.id})" class="btn btn-danger mt-2">Supprimer</button>
            </div>
            <button></button>
        </div>
    </li>`)
}
//Récupération de données
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
})
//constructeur
class Montre {
    constructor(model, image,marque, mouvement, prix) {
        this.model = model;
        this.image = image;
        this.marque = marque;
        this.mouvement = mouvement;
        this.prix = prix;
    }
}
//on fait fonctionner le event
$("form").submit(function (event){
    event.preventDefault()
    var valide = true
    let $image = $("#image").val()
    let $model = $("#model").val()
    let $marque = $("#marque").val()
    let $mouvement = $("#mouvement").val()
    let $prix = $("#prix").val()
    //regex source stack over flow & w3school
    var regex = /^https?:\/\/.*\.(jpg|png)$/
    //on valide le regex
    if(!regex.test($image)){
        $("#error").removeClass("invisible")
        valide == false
    }
    else {
        $("#error").addClass("invisible")
        $("#bravo").removeClass("invisible")
        let $objet = new Montre($model, $image,$marque,$mouvement ,$prix)
        $("#objets").append($objet.toString());
        enregistrer($objet); // Appel correct de la fonction Enregistrer
        Ajouter()
    }
})
//Création d'objet api post
async function ajouter(){
    let image = $("#image").val()
    let model = $("#model").val()
    let marque = $("#marque").val()
    let mouvement = $("#mouvement").val()
    let prix = $("#prix").val()

    const montre =  new Montre(model,image,marque,mouvement,prix)

    const reponse = await fetch('https://6611bca495fdb62f24edaa80.mockapi.io/api/v1/montres', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(montre)
    })
    return await reponse.json()
}
function  Ajouter(){
    ajouter().then(task => {
        location.reload()
    }).catch(error => {
        $(".alert").text(error.message).removeClass("d-none");
    })
}
function Supprimer(id){
    //source stackoverflow
    const confirmer = confirm("Êtes-vous sûr de vouloir supprimer cette montre ?");
    if (confirmer){
    fetch('https://6611bca495fdb62f24edaa80.mockapi.io/api/v1/montres/' + id, {
        method: 'DELETE',
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(task => {
        location.reload()
    }).catch(error => {
        $(".alert").text(error.message).removeClass("d-none");
    })
}
}

//source yt et ancien lab
//enregistre dans le local storage
function enregistrer(id, objet) {
    localStorage.setItem("Montre_" + id, JSON.stringify(objet));
}