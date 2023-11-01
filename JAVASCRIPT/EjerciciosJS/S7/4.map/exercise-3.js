const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

let visitedCities = cities.map(citie => {
    if (citie.isVisited) {
        return (citie.name + " (Visitado)")
    }
    return citie.name
})
console.log(visitedCities);