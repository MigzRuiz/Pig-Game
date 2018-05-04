/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
3 CHALLENGES
Change the game to follow these rules:

1. A player lose his entire score when he rolls two 6 in a row. After that, it's the next player's turn.

2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100.

3. Add another dice to the game, so that there are 2 dices now. The player looses his current score when one of them is a 1.
*/ 

//CODING CHALLENGE 1
    //VARIABLES
var scores, roundScore, activePlayer, gamePlaying, diceCheck, winningScore;

winningScore = 100;

init();

document.querySelector(".btn-roll").addEventListener("click", function (){
    //Check game state
    if (gamePlaying) {
        //Display the dice (1-6 randomly)
        var diceNum = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".dice").style.display = "unset";
        document.querySelector(".dice").src = "dice-" + diceNum + ".png";
        //console.log("Dice Number:" + diceNum + " and DiceCheck:" + diceCheck);

        if (diceNum == 6 && diceCheck == 6) {
            scores[activePlayer] = 0;
            document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        } else if (diceNum != 1){
            //Add that number to the current score of the activePlayer
            roundScore += diceNum;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
        
        diceCheck = diceNum;
    }
});

document.querySelector(".btn-hold").addEventListener("click", function (){
    //Check game state
    if (gamePlaying) {
        winningScore = document.getElementById("winning-score").value;
        
        //Current score would be added to the Total score of the active player
        score[activePlayer] += roundScore;
        document.getElementById("score-" + activePlayer).textContent = score[activePlayer];

        //Check if activePlayer won
        if(score[activePlayer] >= winningScore) {
            //Change name to winner
            document.getElementById("name-" + activePlayer).textContent = "Winner!";

            //Hide dice
            document.querySelector(".dice").style.display = "none";

            //Change winner format
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

            //Change game state to say it's over
            gamePlaying = false;

        } else {
            //Next player
            nextPlayer();
        }
    }
});

document.querySelector(".btn-new").addEventListener("click", init);

//Getting Input
document.querySelector(".btn-form").addEventListener("click", function (){
    winningScore = document.getElementById("winning-score").value;
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

    //Setting the activePlayer
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");

    //Removing the winner format
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("winner");

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