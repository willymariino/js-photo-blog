// inserisco il server da cui vado a prendere le email
const endpoint = "https://lanciweb.github.io/demo/api/pictures/S"

// indico dove voglio andare a posizionare le email
const polaroidGrid = document.querySelector("polaroid-grid")
const polaroidBoard = document.querySelector("polaroid")




// chiamo  l'API che voglio usare
axios.get(endpoint)
    .then(response => {

        const photo = response.data;
        console.log(response)


        let html = "";
        photos.forEach(photo => {
            html += `
        <div class="polaroid">
          <img src="img/pin.svg" alt="Puntina" class="puntina">
          <img src="${url}" alt="${id}" class="foto">
          <p>${title}</p>
        </div>
      `;
        });

        // Inserisce l’HTML nella griglia
        photoGrid.innerHTML = html;
    })
    .catch(error => {
        console.error("Errore nel caricamento immagini:", error);
        photoGrid.innerHTML = <p style="color:red;">Errore nel caricamento immagini</p>;
    })