// Localizar el elemento ol
let pokedex = document.querySelector("#pokedex");

// Crear caja de busqueda
let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Busca un Pokemon");
document.querySelector(".container").insertBefore(input, pokedex);

// Función que transforma nombre de pokemon con la inicial en mayúscula
function formatName(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

// Función para limpiar el listado e inicializarlo
function clearPokemonList() {
    let listado = document.querySelectorAll("li");
    for (let li of listado) {
        li.remove();
    }
}

// Evento para buscar pokemon en el input. Paso mayúsculas a minúsculas para que encuentre resultados se escriba como se escriba
input.addEventListener("keyup", function() {
    getPokemon(input.value.toLowerCase());    
})

// Función que devuelve el listado de Pokemon.
// Acepta un parámetro que será la búsqueda del Pokemon. En caso de no buscarlo, devuelve la lista completa
const getPokemon = async (param) => {
    try {
        // Llamada a función
        clearPokemonList();
        // Si el buscador no recibe nada, lo convierte en string vacio
        if(param==undefined){
            param="";
        }
        // Creo un array vacio donde se incluirán todos los Pokemon mapeados
        let pokemons = [];
        // Se ejecuta un fetch sobre la API. Los elementos se añadirán al array creado previamente
        for(i=1; i<=150; i++) {
            let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i);
            let responseJson = await response.json();
            pokemons.push(responseJson);
        }
        // Mapeamos el resultado del fetch y escogemos los atributos a almacenar
        const pokemon = pokemons.map((result) => ({
            image: result.sprites['front_default'],
            imageShiny: result.sprites['front_shiny'],
            id: result.id,
            name: result.name,
            type: result.types.map((type) => type.type.name),
            typeString: result.types.map((type) => type.type.name).join(', ') //Usado para buscar por tipos
        }))
        // Recorremos el array de pokemon
        for(let pkm of pokemon) {
            // Si el nombre o el tipo incluyen lo escrito en el input, se mostrarán únicamente dichos pokemon. También busca por nº (id) de pokemon En caso de estar vacío, se muestran todos.
            if(pkm.name.includes(param)||pkm.typeString.includes(param)||pkm.id == param){ 
                let list = document.createElement("li");

                // Creamos div para la imagen y la imagen del pokemon
                let div_img = document.createElement("div")
                div_img.setAttribute("class", "image");
                let img = document.createElement("img");
                img.setAttribute("src", pkm.image);
                img.setAttribute("alt", formatName(pkm.name));
                div_img.appendChild(img);

                // Creamos div para la información del pokemon
                let div_info = document.createElement("div");
                div_info.setAttribute("class", "info");
                let p_num = document.createElement("p");
                p_num.setAttribute("class", "pkmNumber");
                    p_num_text = document.createTextNode("#"+pkm.id);
                    p_num.appendChild(p_num_text);
                let p_name = document.createElement("p");
                p_name.setAttribute("class", "pkmName");
                    p_name_text = document.createTextNode(formatName(pkm.name));
                    p_name.appendChild(p_name_text);
                div_info.appendChild(p_num);
                div_info.appendChild(p_name);

                // Creamos div para los tipos de los pokemon
                let type_info = document.createElement("div");
                type_info.setAttribute("class", "types");
                for(let type of pkm.type) {
                    let img_type = document.createElement("img");
                    img_type.setAttribute("src", "assets/80px-Tipo_"+type+"_EP.png");
                    img_type.setAttribute("alt", type);
                    type_info.appendChild(img_type);
                }

                // Añadimos al elemento li la imagen, la información y los tipos. Este li lo añadimos al ol
                list.appendChild(div_img);
                list.appendChild(div_info);
                list.appendChild(type_info);

                pokedex.appendChild(list);

                // Eventos hover sobre las imagenes de los pokemon: muestra al hacer hover la versión shiny
                img.addEventListener("mouseover", function() {
                    img.setAttribute("src", pkm.imageShiny);
                })
                img.addEventListener("mouseout", function() {
                    img.setAttribute("src", pkm.image);
                })
            }
        }
    }
    catch (error) {
        console.log(error)
    }
}

getPokemon();