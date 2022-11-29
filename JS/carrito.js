function armarTabla(alb){
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
                        <input id="cantidad" name="cantidad" type="number" placeholder="1" min=1 max=100
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

// function recuperarCarrito(){
//     let tablaHTML = ""
//     const tbody = document.querySelector("tbody")
//     const carrito = JSON.parse(localStorage.getItem("miCarrito"))
//     if (carrito.length > 0){
//         carrito.forEach(alb => tablaHTML += armarTabla(alb));
//         tbody.innerHTML = tablaHTML
//         }
//         calcularTotalCompra()
//     }
// recuperarCarrito()

// const total = document.querySelector('#total')

// const calcularTotalCompra = () => {
//     let total = 0;
//     carrito.forEach((producto) => {
//       total += producto.importe * producto.cantidad;
//     });
//     totalCompra.innerHTML = total;
//     return total
    
//   };
const totalDiv = document.querySelector('#total');
const totalCompra = document.createElement('h2')
debugger
function recuperarCarrito(){
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
    if (carrito.length > 0){
        carrito.forEach(alb => tablaHTML += armarTabla(alb));
        tbody.innerHTML = tablaHTML
        }

        calcularTotalCompra()
    }
    recuperarCarrito()
// const total = document.querySelector(".total")
// const subTotal = carrito.reduce((acc, album) => acc + album.importe,0).toFixed(2)
//     total.innerHTML = `${subTotal}`



// console.log(subTotal)
