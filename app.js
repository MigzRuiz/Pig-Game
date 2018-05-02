/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
//VARIABLES
var score, roundScore, activePlayer, gamePlaying;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
    if (gamePlaying) {
        //We want a random number from 1 to 6;
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
            nextPlayer();
        }
    }
});

document.querySelector(".btn-new").addEventListener("click", init);

//Functions
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

/*

/*
3 CHALLENGES
Change the game to follow these rules:

1. A player lose his entire score when he rolls two 6 in a row. After that, it's the next player's turn.

2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100.

3. Add another dice to the game, so that there are 2 dices now. The player looses his current score when one of them is a 1.
*/ 

//CODING CHALLENGE 1
    //VARIABLES
var score, roundScore, activePlayer, gamePlaying;
var diceCheck = 0;

init();

document.querySelector(".btn-roll").addEventListener("click", function (){
    //Display the dice (1-6 randomly)
    var diceNum = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".dice").style.display = "unset";
    document.querySelector(".dice").src = "dice-" + diceNum + ".png";
    console.log("Dice Number:" + diceNum + " and DiceCheck:" + diceCheck);

    if (diceNum > 1){
        //Add that number to the current score of the activePlayer
        roundScore += diceNum;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }

    //if player rolls two 6 in a row
    if(diceNum == diceCheck) {
        diceNum == 6 ? nextPlayer() : diceCheck = diceNum;
    } else {
        diceCheck = diceNum;
    }
});

function init() {
    //Assigning base values for the variables
    score = [0,0];
    roundScore = 0; 
    activePlayer = 0;
    gamePlaying = true;

    //Setting the current and total score to display 0
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    //Hiding the button
    document.querySelector(".dice").style.display = "none";
}

function nextPlayer() {
    //If diceNum is 1, change the score of the activePlayer to 0
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = roundScore;

    //Hide dice
    document.querySelector(".dice").style.display = "none";

    //Change activePlayer
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;

    //Change layout of both player panel to indicate who is the activePlayer
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
}