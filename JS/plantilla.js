function retornoCard(album){
    return `<div class="card id="card${album.id}">
                <div class="face front">
                    <img src="${album.imagen}" alt="img-card" class="img-card">
                    <h3>${album.album}</h3>
                </div>
                <div class="face back">
                    <h3>${album.artista}</h3>
                    <p>${album.texto}</p>
                    <p class="monto">$${album.importe} MXN</p>
                    <div>
                        <button class="button agregar" id="${album.id}" title="Agregar '${album.album}' al carrito">Agregar</button>
                    </div>
                </div>
            </div>`
}