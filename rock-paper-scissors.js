function computerPlay() {
    const game = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * game.length);
    return game[random];
}

console.log(computerPlay());