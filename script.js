// inserisco il server da cui vado a prendere le email
const endpoint = "https://lanciweb.github.io/demo/api/pictures/S"

// indico dove voglio andare a posizionare le email
const polaroidGrid = document.querySelector(".polaroid-grid")




// chiamo  l'API che voglio usare
axios.get(endpoint)
    .then(response => {

        const photos = response.data.response;
        console.log(response)
        let html = ""

        // Crea tutto l'HTML in una volta sola
        photos.forEach(photo => {
            html += `
      <div class="polaroid">
        <img src="img/pin.svg" alt="Puntina" class="puntina">
        <img src="${photo.url}" alt="${photo.title}" class="foto">
        <p class="caption">${photo.title}</p>
      </div>
    `;
        });

        polaroidGrid.innerHTML = html;
    })
    .catch(error => {
        console.error("Errore nel caricamento immagini:", error);
    });