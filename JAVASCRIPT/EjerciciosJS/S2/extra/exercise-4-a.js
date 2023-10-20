let animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
let texto = "Caracol";
let texto2 = "Mosquito";
let texto3 = "Oveja";

function findArrayIndex(array, text) {
    for(i=0; i<array.length; i++) {
        if(array[i] == text) {
            return i;
        }
    }
    return "No existe";
}
let result = findArrayIndex(animales, texto);
console.log(result);

let result2 = findArrayIndex(animales, texto2);
console.log(result2);

let result3 = findArrayIndex(animales, texto3);
console.log(result3);

