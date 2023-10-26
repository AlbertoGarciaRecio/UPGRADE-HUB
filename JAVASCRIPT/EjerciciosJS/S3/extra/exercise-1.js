const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let list = document.createElement("ul");
let listado = document.body.appendChild(list);
for(let country of countries) {
    document.querySelector("ul");
    let paises = document.createElement("li");
    let nameCountry = document.createTextNode(country);
    paises.appendChild(nameCountry);
    listado.appendChild(paises);
}