const container = document.getElementById("container")
document.addEventListener("DOMContentLoaded",console.log("Se cargó el HTML"))

//cargar tarjetas 

function cargarProductos(array) {
    let contenido = ""
    if (array.length > 0) {
        array.forEach(album => {
            contenido += retornoCard(album)
        })
        container.innerHTML = contenido
    }
}

cargarProductos(albums)

//click a botones 

const botonesAdd = document.querySelectorAll("button.button.agregar")

function activarBotones(){
    botonesAdd.forEach(btn =>{
    btn.addEventListener("click",()=>{
      let resultado = albums.find(album => album.id === parseInt(btn.id))
        carrito.push(resultado)
        localStorage.setItem("miCarrito", JSON.stringify(carrito))
       })
    })
}
activarBotones()

//filtrar productos

function filtrarProductos(){
    if (buscar.value.trim() !== ""){
       
        let resultado = albums.filter(album => album.artista.toUpperCase().includes(buscar.value.toUpperCase().trim()))
        if (resultado.length > 0){
            cargarProductos(resultado)
        }else{
            console.warn("No se encontro coincidencias")
            }
    }
}

buscar.addEventListener("keypress",(e)=>{
    if (e.key === 'Enter' && buscar.value.trim() !== ""){
        filtrarProductos() 
    }else{
        cargarProductos(albums)
    }
})
