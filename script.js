// inserisco il server da cui vado a prendere le email
const endpoint = "https://lanciweb.github.io/demo/api/pictures/S"

// indico dove voglio andare a posizionare le email
const emailContainer = document.querySelector("polaroid-grid")
const emailList = document.querySelector("polaroid")

const emailCount = 10


// chiamo  l'API che voglio usare
axios.get(endpoint)
    .then(response => {

        const email = response.data.response;
        console.log(response)

        // creo elementi html 
        emailList.innerHTML += `<li>${email}<li>`



    }).catch(error => {
        console.log("errore", error)
    })




