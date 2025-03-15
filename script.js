

const endpoint = "https://lanciweb.github.io/demo/api/pictures/S";


const polaroidGrid = document.getElementById("polaroid-grid");

axios.get(endpoint)
    .then(response => {
        const photos = response.data.response;


        photos.forEach(photo => {
            polaroidGrid.innerHTML += `
        <div class="polaroid">
          <img src="img/pin.svg" alt="Puntina" class="puntina">
          <img src="${photo.url}" alt="${photo.title}" class="foto">
          <div class="caption">
            <p><strong>ID:</strong> ${photo.id}</p>
            <p><strong>Title:</strong> ${photo.title}</p>
            <p><strong>Date:</strong> ${photo.date}</p>
          </div>
        </div>
      `;
        });

        polaroidGrid.innerHTML = html;
    })
    .catch(error => {
        console.error("Errore nel caricamento immagini:", error);
    });