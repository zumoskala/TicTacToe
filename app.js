//HTML elements that will be used in code
const newGame = document.querySelector(".new_game");
const currentPlayer_status = document.querySelector(".player_id");
const boardCells = document.querySelectorAll(".game_cell");

//variables
var gamePlaying = true; //game is currently on
var nextPlayer = 0;


var startGame = function (e) {
    console.log(e);
};

var selectCell = function (e) {
    if(!e.target.classList.contains('x') && !e.target.classList.contains('o')){
        if (nextPlayer === 0) {
            e.target.classList.add('x');
            nextPlayer = 1;
        } else if (nextPlayer === 1) {
            e.target.classList.add('o');
            nextPlayer = 0;
        }
    }
    console.log(e.target.id);
}

//event listeners
newGame.addEventListener('click', startGame);

for (var boardCell of boardCells){
    boardCell.addEventListener('click', selectCell);
}

//TODO: check for winner, implement new game





