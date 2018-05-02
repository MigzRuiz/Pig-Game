/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//VARIABLES
var score, roundScore, activePlayer, gamePlaying;


init();

//EVENTS AND EVENT HANDLING
    /*The first way is doing a callback function = calling a function that was passed as an argument on another function.
        function btn(){
            //Do something here
        }
        document.querySelector(".btn-roll").addEventListener("click", btn);
    */

    //Second way is writing an annonymous function like this:
document.querySelector(".btn-roll").addEventListener("click", function() {
    if (gamePlaying) {
        //1 We want a random number from 1 to 6;
        var dice = Math.floor(Math.random() * 6) + 1;
        //2 We want to display that random number;
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "unset";
        diceDOM.src="dice-" + dice + ".png";
        //3 We want to update the score but ONLY IF the number is NOT 1;
        if(dice > 1) {
            //Add to score
            roundScore += dice;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
            //document.querySelector(".player-0-panel").classList.add('active');
            //document.querySelector(".player-1-panel").classList.remove('active');
        }
    }
});

document.querySelector(".btn-hold").addEventListener("click", function(){
    if(gamePlaying) {
        //Variables
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
            //Switch to next player
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
    //To manipulate CSS = use .style.<then the style>
    document.querySelector(".dice").style.display = "none";

}

//var dice = Math.floor(Math.random() * 6) + 1;

//For us to be able to set a value in the DOM
//document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

//To get value in the DOM
//var x = document.querySelector("#score-0").innerHTML;
//console.log(x);
