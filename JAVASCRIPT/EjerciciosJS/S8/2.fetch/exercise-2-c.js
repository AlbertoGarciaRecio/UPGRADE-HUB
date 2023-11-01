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
            let btn2 = document.createElement("button")
            btn2.textContent = "Borrar";
            p.appendChild(text);
            document.body.appendChild(p);
            for(let elem of myJson.country) {
                let percent = Math.round(elem.probability * 100)
                p.textContent = p.textContent + percent + " porciento de ser de " + elem.country_id + ", "
            }
            p.appendChild(btn2);
            btn2.addEventListener("click", function() {
                btn2.parentNode.remove()
            })
        })
}

let btn = document.querySelector("button");
btn.addEventListener("click", search);

