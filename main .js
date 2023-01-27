const url = "https://docs.google.com/spreadsheets/d/1YdQ32dfBhAPpHqcSiDNQGwBw9rX0DaBZ_2fqFDyvhLs/export?format=csv";
const main = document.querySelector("main");
fetch(url).then(result => result.text()).then(function (csvtext) {
    return csv().fromString(csvtext);
}).then(function (csv) {
    csv.forEach(function (row) {
    main.innerHTML += `
    <div class="carta">
    <img class="imagen" src="${row.imagen}" alt="">
    <h1 class="titulo">${row.titulo}</h1>
    <p class="descripcion">${row.descripcion}</p>
    <p class="precio">${row.precio}$</p>

</div>
    
    `
    })
});





