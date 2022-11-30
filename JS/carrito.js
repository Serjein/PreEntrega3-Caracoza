const totalDiv = document.querySelector('#total');
const totalCompra = document.createElement('h2')

function armarTabla(alb) {
    return `<tr>
                <td>
                <img class="tabla__img-carrito" src="${alb.imagen}" alt="Album">
                </td>
                <td>
                ${alb.artista}         
                </td>
                <td>
                    <form action="number">
                        <label for="Cantidad"></label>
                        <input class="cantidad" name="cantidad" type="number" placeholder="1" min=1 max=100
                            required>
                    </form>
                </td>
                <td>
                ${alb.importe}
                </td>
                <td>
                    <button id="${alb.artista}" class="material-symbols-outlined button">X</button>
                </td>
            </tr>`

}

function recuperarCarrito() {
    const calcularTotalCompra = () => {
        let total = 0;
        carrito.forEach((producto) => {
            total += producto.importe;
        });
        totalCompra.innerHTML = total;
        totalDiv.append(totalCompra)
    };

    let tablaHTML = ""
    const tbody = document.querySelector("tbody")
    const carrito = JSON.parse(localStorage.getItem("miCarrito"))
    if (carrito.length > 0) {
        carrito.forEach(alb => tablaHTML += armarTabla(alb));
        tbody.innerHTML = tablaHTML
    }

    calcularTotalCompra()
}
recuperarCarrito()


