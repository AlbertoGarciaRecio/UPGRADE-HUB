const baseUrl = 'https://api.nationalize.io?name=';

function search() {
    let input = document.querySelector("input").value;
    fetch(baseUrl + input)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        })
}

let btn = document.querySelector("button");
btn.addEventListener("click", search);