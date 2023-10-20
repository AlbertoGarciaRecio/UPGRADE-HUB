let jugadores = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap (array, var1, var2) {
    let jugador1 = array[var1];
    let jugador2 = array[var2];
    array[var1] = jugador2;
    array[var2] = jugador1;
    return array;
}

console.log(swap(jugadores, 1,3));
console.log(swap(jugadores, 1,2));