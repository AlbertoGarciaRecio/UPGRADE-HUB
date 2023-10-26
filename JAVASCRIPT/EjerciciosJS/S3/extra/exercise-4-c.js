const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];
document.querySelector("button").remove()
for(country of countries) {
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let img = document.createElement("img");
    let countryName = document.createTextNode(country.title);
    let boton = document.createElement("button")
    let botonText = document.createTextNode("Borrar elemento")
    boton.appendChild(botonText)
    h4.appendChild(countryName);
    img.setAttribute("src", country.imgUrl);
    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(boton);
    document.body.appendChild(div);
}

let botones = document.querySelectorAll("button");
for(let boton of botones) {        
    boton.addEventListener("click", function() {
        boton.parentNode.remove()
    });
}