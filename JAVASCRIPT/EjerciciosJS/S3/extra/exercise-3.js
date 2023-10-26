const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let div = document.querySelector("[data-function=printHere]")
let list = document.createElement("ul");
div.appendChild(list);
for(let car of cars) {
    document.querySelectorAll("ul");
    let element = document.createElement("li");
    let carName = document.createTextNode(car);
    element.appendChild(carName);
    list.append(element);
}