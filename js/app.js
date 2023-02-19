const carrito = document.querySelector("#carrito")
const cardCafe = document.getElementsByClassName("boton")
const contenedorCarrito = document.querySelector(".lista-carrito tbody")

const cafeLista = Array.from(cardCafe)

articuloCarrito = []

loadEventListeners()

function loadEventListeners(){
    cafeLista.forEach(cafe =>{
        cafe.addEventListener("click", agregarCafe)
    })
}

function agregarCafe(e){
    const infoCafe = e.target.parentElement

    leerCafe(infoCafe)
}

function leerCafe(cafe){
    infoCafe = {
        imagen: cafe.querySelector("img").src,
        nombre: cafe.querySelector("h3").textContent,
        precio: cafe.querySelector("p").textContent,
        id: cafe.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }

    const existe = articuloCarrito.some(prod => prod.id === infoCafe.id)

    if(existe){
        modificarCantidad(infoCafe)
    } else{
        articuloCarrito.push(infoCafe)
    }

    carritoHTML()
}

function modificarCantidad(cafe){
    articuloCarrito.forEach(prod=>{
        if(prod.id===cafe.id){
            prod.cantidad++
        }
    })
}

function carritoHTML(){

    limpiarHTML()

    articuloCarrito.forEach(cafe =>{
        const {imagen, nombre, precio, cantidad} = cafe

        const row = document.createElement("tr")
        row.innerHTML=`
            <td>
                <img src="${imagen}">
            </td>
            <td>
                ${nombre}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
        `
        contenedorCarrito.appendChild(row)
    })
}

function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}