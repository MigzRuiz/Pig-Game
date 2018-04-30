/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//VARIABLES
var score = [0,0];
var roundScore = 0;
var activePlayer = 0;

//getElementById is faster than querySelector
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0"

//To manipulate CSS = use .style.<then the style>
document.querySelector(".dice").style.display = "none";

//EVENTS AND EVENT HANDLING
    /*The first way is doing a callback function = calling a function that was passed as an argument on another function.
        function btn(){
            //Do something here
        }
        document.querySelector(".btn-roll").addEventListener("click", btn);
    */

    //Second way is writing an annonymous function like this:
document.querySelector(".btn-roll").addEventListener("click", function() {
    /*We want to do something each time the btn-roll class is clicked.
        1.) We want a random number from 1 to 6;
        2.) We want to display that random number;
        3.) We want to update the score but ONLY IF the number is NOT 1;
    */
    //1
    var dice = Math.floor(Math.random() * 6) + 1;
    //2
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "unset";
    diceDOM.src="dice-" + dice + ".png";
    //3
    var newNum = document.querySelector(".player-current-score").textContent + dice;
    console.log(newNum);
});




//var dice = Math.floor(Math.random() * 6) + 1;

//For us to be able to set a value in the DOM
//document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

//To get value in the DOM
//var x = document.querySelector("#score-0").innerHTML;
//console.log(x);
