// function getCharacters () {
//     fetch('https://rickandmortyapi.com/api/character')
//     .then(res => res.json())
//     .then(characters => console.log(characters));
// }

// getCharacters();

const getCharacters = async () => {
    try {
        let response = await fetch('https://rickandmortyapi.com/api/character');
        let responseJson = await response.json();
        console.log(responseJson);
    }
    catch (error) {
        console.log(error);
    }
}

getCharacters();