// inserisco il server da cui vado a prendere le email
const endpoint = "https://lanciweb.github.io/demo/api/pictures/S"

// indico dove voglio andare a posizionare le email
const polaroidGrid = document.querySelector("polaroid-grid")
const polaroidBoard = document.querySelector("polaroid")




// chiamo  l'API che voglio usare
axios.get(endpoint)
    .then(response => {

        const email = response.data.response;
        console.log(response)

        // creo elementi html 
        polaroidBoard.innerHTML += `<div class="polaroid">
            <img src="img/pin.svg" alt="Puntina" class="puntina">
            <img src="${url}" alt="Foto"
                class="foto">
            <p class="caption">${id}</p>
            <p class="caption">${title}</p>
            <p class="caption">${date}</p>
        </div>`



    }).catch(error => {
        console.log("errore", error)
    })




