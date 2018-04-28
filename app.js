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
var dice = Math.floor(Math.random() * 6) + 1;

//For us to be able to set a value in the DOM
//document.querySelector("#current-" + activePlayer).textContent = dice;
document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

//To get value in the DOM
var x = document.querySelector("#score-0").innerHTML;
console.log(x);

//To manipulate CSS
//use .style.<then the style>
document.querySelector(".dice").style.display = "none";

