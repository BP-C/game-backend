const fs = require("fs");
fs.readFileSync("games.json", "utf-8");

function getGames() {
    const data = fs.readFileSync("games.json", "utf-8");
    const games = JSON.parse(data);
    return games;
}

function getGameById(id) {
    const games = getGames();
    return games.find(game => game.id === id);
}

function addGame(game) {
    const games = getGames();
    games.push(game);
    fs.writeFileSync("games.json", JSON.stringify(games, null, 2));
}

addGame({
    id: 3,
    title: "Hades",
    genre: "Roguelike",
    year: 2020
});

const games = getGames();
console.log("Titre du premier jeu :", games[0].title);
console.log(getGameById(2));
console.log(getGameById(999));