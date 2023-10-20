let divs = document.querySelectorAll(".fn-insert-here");

for(div of divs) {
    let p = document.createElement("p");
    let text = document.createTextNode("Voy dentro!")
    p.appendChild(text);
    div.appendChild(p);
}