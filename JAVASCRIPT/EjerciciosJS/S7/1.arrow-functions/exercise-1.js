const suma = (a = 10, b = 5) => a + b;

const suma0 = suma();
const suma1 = suma(5);
const suma2 = suma(15, 20);

console.log(suma0);
console.log(suma1);
console.log(suma2);