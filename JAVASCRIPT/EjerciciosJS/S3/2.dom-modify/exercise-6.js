const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let lista = document.createElement("ul");
document.body.appendChild(lista);

let listado = document.querySelector("ul");

for (i=0; i<apps.length; i++) {
    let li = document.createElement("li");
    let text = document.createTextNode(apps[i]);
    listado.appendChild(li);
    li.appendChild(text)
}
