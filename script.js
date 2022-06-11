//import Deck from "./deck.js";

//get value of cards



//make constants for each div tag
const status = document.querySelector(".status");
const dealerDeck = document.querySelector(".dealer-deck");
const dealerCards =  document.querySelector(".dealer-cards");
const playerCards = document.querySelector("player-cards");


//click listener for hit
const hit = document.getElementById("hit");
hit.addEventListener("click", function(){
    document.getElementById("hittest").innerHTML = "Hit Test";
})
//click listener for stay
const stay = document.getElementById("stay");
stay.addEventListener("click", function(){
    document.getElementById("staytest").innerHTML = "Stay Test";
  
})


//game order

//create new deck
//initialize round counter and set to 0
//shuffle cards
//place bets if added
//deal player 1 card face up from deck
//deal dealer 1 card face up from deck
//deal player 1 card face up from deck
//deal dealer 1 card face down from deck
//check if dealer total = player total = 21, if so tie and new round
//if dealer total 21, dealer win and new round
//if player total 21, player win and new round

//player can hit or stand
//if hit, add a card
// check the new total
//if over 21, bust and dealer wins, new round
// if 21 win
//under 21, hit or stand again and repeat

//dealer turn
//show dealer second card to player
//if total 17 or more, stand
//if total 16 or less, hit and repeat
//if over 21, dealer bust and player wins, new round

//after both stand, check player vs dealer total, higher not over 21 wins
//if totals = then tie 

//end of round
//add dealer cards and player cards to discard pile
//increment round counter
//check round counter, every 5 rounds add cards back to deck and reshuffle

//new round


function newGame(){

}

function checkBlackjack(){

}

function checkWinner(){

}

function hit(){

}

function stand(){

}
