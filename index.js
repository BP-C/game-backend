const fs = require("fs");
fs.readFileSync("games.json", "utf-8");

function getGames() {
    const data = fs.readFileSync("games.json", "utf-8");
    const games = JSON.parse(data);
    return games;
}

const games = getGames();
console.log("Titre du premier jeu :", games[0].title);
