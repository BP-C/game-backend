const fs = require("fs");
fs.readFileSync("games.json", "utf-8");

function getGames() {
    const data = fs.readFileSync("games.json", "utf-8");
    const games = JSON.parse(data);
    return games;
}

const games = getGames();
console.log("Titre du premier jeu :", games[0].title);

function getGameById(id) {
    const games = getGames();
    return games.find(game => game.id === id);
}

console.log(getGameById(2));
console.log(getGameById(999));

function addGame(game) {
    const games = getGames();
    games.push(game);
    fs.writeFileSync("games.json", JSON.stringify(games, null, 2));
}

//addGame({
//    id: 3,
//    title: "Hades",
//    genre: "Roguelike",
//    year: 2020
//});

function updateGame(id, newData) {
    const games = getGames();
    const index = games.findIndex(game => game.id === id);
    if (index === -1) {
        return;
    }
    games[index] = { ...games[index], ...newData };
    fs.writeFileSync("games.json", JSON.stringify(games, null, 2));
}

//updateGame(3, {
//    title: "Hades II",
//    genre: "Roguelike",
//    year: 2025
//});


function deleteGame(id) {
    const games = getGames();
    const filtre = games.filter(game => game.id !== id);
    if (filtre.length === games.length) {
        return;
    }
    fs.writeFileSync("games.json", JSON.stringify(filtre, null, 2));
}

deleteGame(2);