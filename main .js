const url = "https://docs.google.com/spreadsheets/d/1YdQ32dfBhAPpHqcSiDNQGwBw9rX0DaBZ_2fqFDyvhLs/export?format=csv";

const contenedorProductos = document.querySelector("main");
const botonesCategorias = document.querySelectorAll(".boton-categoria")



fetch(url).then(result => result.text()).then(function (csvtext) {
    return csv().fromString(csvtext);
}).then(function (csv) {

    function cargarProductos(productosElegidos) {
        contenedorProductos.innerHTML = "";
        productosElegidos.forEach(row => {
            let div = document.createElement("div");
            div.classList.add("carta");
            div.innerHTML = `
                <img  class="imagen" src="${row.imagen}" alt="carro">
                <h3 class="titulo">${row.precio}</h3>
                <p class="descripcion">${row.descripcion}</p>`;
            contenedorProductos.append(div);
        });

    }
    cargarProductos(csv);

    botonesCategorias.forEach(botonCategoria => {
        botonCategoria.addEventListener("click", (e) => {
            if (e.currentTarget.id != "todo") {
                const elegidos = csv.filter(row => row.tipo == e.currentTarget.id);
                cargarProductos(elegidos);
            } else {
                cargarProductos(csv);
            }
        })
    })



})


