const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];
for(country of countries) {
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let img = document.createElement("img");
    let countryName = document.createTextNode(country.title);
    h4.appendChild(countryName);
    img.setAttribute("src", country.imgUrl);
    div.appendChild(h4);
    div.appendChild(img);
    document.body.appendChild(div);
}

let boton = document.querySelector("button");

function deleteLast() {
    let div = document.querySelectorAll("div");
    div[div.length-1].remove();
}
boton.addEventListener("click", deleteLast)
