const userAnwsers = [];

function confirmExample(description){
    return confirm(description)
}

function promptExample(description){
    return prompt(description)
}

function father(description, callback){
    let result = callback(description);
    userAnwsers.push(result);
}

let text = "Soy un texto";

father(text, confirmExample);
father(text, promptExample);
father(text, confirmExample);
father(text, promptExample);
father(text, confirmExample);
father(text, promptExample);

console.log(userAnwsers);



