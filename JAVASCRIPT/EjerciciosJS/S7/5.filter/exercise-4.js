const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let under30 = streamers.filter(player => {
    if(player.gameMorePlayed.includes("League of Legends") && player.age < 30) {
        return true;
    }
    return false;
})
console.log(under30);