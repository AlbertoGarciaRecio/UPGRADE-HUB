const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let boton = document.querySelector("[data-function = toShowFilterStreamers]");
let content = document.querySelector("[data-function = toFilterStreamers]");
boton.addEventListener("click", function() {
    let valorContenido = content.value;
    let jugador = streamers.filter(player => {
        if(player.name.includes(valorContenido)) {
            return true;
        }
        return false;
    })
    console.log(jugador)
})