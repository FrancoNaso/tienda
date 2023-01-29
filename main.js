const url = "https://docs.google.com/spreadsheets/d/1YdQ32dfBhAPpHqcSiDNQGwBw9rX0DaBZ_2fqFDyvhLs/export?format=csv";

const contenedorProductos = document.querySelector("main");
const botonesCategorias = document.querySelectorAll(".boton-categoria")



fetch(url).then(result => result.text()).then(function (csvtext) {
    return csv().fromString(csvtext);
}).then(function hola (csv) {
const cosas = csv
localStorage.setItem("elementos", JSON.stringify(cosas));
})

const productos = JSON.parse(localStorage.getItem("elementos"));

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";


    productosElegidos.forEach(producto => {
        let div = document.createElement("div");
        div.classList.add("carta");
        div.innerHTML = `
        <img  class="imagen" src="${producto.imagen}" alt="carro">
        <h3 class="titulo">${producto.precio}</h3>
        <p class="descripcion">${producto.descripcion}</p>
        <span class="${producto.estado}">${producto.estado}</span>
        <span class="cantidad">cantidad=${producto.cantidad}</span>`;
        contenedorProductos.append(div);
    });
}
cargarProductos(productos);

botonesCategorias.forEach(botonCategoria => {
    botonCategoria.addEventListener("click", (e) => {
        if (e.currentTarget.id != "todo") {
            const elegidos = productos.filter(producto => producto.tipo == e.currentTarget.id);
            cargarProductos(elegidos);
        } else {
            cargarProductos(productos);
        }
    })
})


