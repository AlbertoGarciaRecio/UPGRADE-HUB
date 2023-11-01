const baseUrl = 'https://api.nationalize.io?name=';

function search() {
    let input = document.querySelector("input").value;
    fetch(baseUrl + input)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            let p = document.createElement("p");
            let text = document.createTextNode(`El nombre ${input} tiene un`);
            p.appendChild(text);
            document.body.appendChild(p);
            for(let elem of myJson.country) {
                let percent = Math.round(elem.probability * 100)
                p.textContent = p.textContent + percent + " porciento de ser de " + elem.country_id + ", "
            }
        })
}

let btn = document.querySelector("button");
btn.addEventListener("click", search);