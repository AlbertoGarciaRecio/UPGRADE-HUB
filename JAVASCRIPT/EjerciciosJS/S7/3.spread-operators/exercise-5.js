const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

let colorsCopy = [...colors];
colorsCopy.splice(2, 1);
console.log(colorsCopy);

let colorsCopy2 = [...colors.slice(0, 2), ...colors.slice(3)];
console.log(colorsCopy2);