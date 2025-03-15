// inserisco il server da cui vado a prendere le email
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail"

// indico dove voglio andare a posizionare le email
const emailContainer = document.getElementById("email-container")
const emailList = document.getElementById("email-list")

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




