let animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
let texto = "Mosquito";
let texto2 = "Ajolote";

function findArrayIndex(array, text) {
    for(i=0; i<array.length; i++) {
        if(array[i] == text) {
            return i;
        }
    }
    return "No existe";
}
function removeItem(array, text) {
    let findedItem = findArrayIndex(array, text);
    if(findedItem > -1) {
        array.splice(findedItem, 1);
    }
    return array;
}

let result = removeItem(animales, texto);
console.log(result);

let result2 = removeItem(animales, texto2);
console.log(result2);