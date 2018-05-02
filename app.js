/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, roundScore, activePlayer, gamePlaying;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
    if (gamePlaying) {
        //Get a random number from 1 to 6;
        var dice = Math.floor(Math.random() * 6) + 1;

        //Display that random number;
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "unset";
        diceDOM.src="dice-" + dice + ".png";

        //Update the score but ONLY IF the number is NOT 1;
        if(dice > 1) {
            roundScore += dice;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector(".btn-hold").addEventListener("click", function(){
    if(gamePlaying) {
        var diceDOM = document.querySelector(".dice");

        //Transfer the roundScore to the actual score
        score[activePlayer] += roundScore;

        //Show that in the DOM
        document.getElementById("score-" + activePlayer).textContent = score[activePlayer];

        //Calculate if player won
        if(score[activePlayer] >= 20) {
            document.getElementById("name-" + activePlayer).textContent = "Winner!";
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector(".btn-new").addEventListener("click", init);

function nextPlayer() {
    var diceDOM = document.querySelector(".dice");
    document.getElementById("current-" + activePlayer).textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    diceDOM.style.display = "none";
    roundScore = 0;
}

function init(){
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    WgamePlaying = true;

    //getElementById is faster than querySelector
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0"

    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";


    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");

    document.querySelector(".dice").style.display = "none";

}