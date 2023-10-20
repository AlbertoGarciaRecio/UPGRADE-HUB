const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

let smallMovie = [];
let mediumMovie = [];
let largeMovie = [];
for(let movie of movies) {
    if (movie.durationInMinutes<100) {
        smallMovie.push(movie)
    }
    else if (movie.durationInMinutes<200) {
        mediumMovie.push(movie)
    }
    else {
        largeMovie.push(movie);
    }

}
console.log(smallMovie);
console.log(mediumMovie);
console.log(largeMovie);