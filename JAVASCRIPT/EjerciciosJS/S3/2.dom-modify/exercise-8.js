let p = document.createElement("p");
let text = document.createTextNode("Voy en medio!");
p.appendChild(text);

let divs = document.querySelectorAll("div");

document.body.insertBefore(p, divs[1]);
