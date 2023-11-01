const numbersList = [];

function sum(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function father(a, b, callback){
    let num = callback(a, b);
    numbersList.push(num);
}

father(1, 2, sum);
father(2, 1, substract);
father(2, 4, sum);
father(2, 4, substract);

console.log(numbersList);
