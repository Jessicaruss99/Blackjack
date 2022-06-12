import Deck from "./deck.js";

//get value of cards

//create new deck
const deck = new Deck();
console.log(deck.cards);

//initialize round counter and set to 0
var roundCount = 0;

//make constants for each div tag
const status = document.querySelector(".status");
const dealerDeck = document.querySelector(".dealer-deck");
const dealerCards =  document.querySelector(".dealer-cards");
const playerCards = document.querySelector(".player-cards");

var dealerTotal =0;
var playerTotal=0;

var canHit = true;

var dealerAces =0;
var playerAces =0;

var statusMessage = "";

//if player unable to hit, disable the hit button
if(canHit == false){
 hitID.disabled = true;
}

//const playerCard = deck.cards[0];

//click listener for hit
const hitID = document.getElementById("hit");
hitID.addEventListener("click", playerHit)

//click listener for stay
const stayID = document.getElementById("stay");
stayID.addEventListener("click", stay)
   // document.getElementById("staytest").innerHTML = "Stay Test";
  
const playID = document.getElementById("playagain");
playID.addEventListener("click",newGame);


window.onload = function() {
   newGame()
  };

function stay(){
  

if (playerTotal>21){
    statusMessage = "BUST! You Lose"
}
else if (dealerTotal>21){

statusMessage = "You Win"
}
else if (dealerTotal == playerTotal){
    statusMessage = "TIE"
}
else if (playerTotal>dealerTotal){
    statusMessage = "You Win"
}
else if (playerTotal<dealerTotal){
    statusMessage = "You Lose"
}
status.innerHTML = "<h2>" + statusMessage + "</h2>";

}

function playerHit(){
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card.value +"-"+card.suit+ ".png";
    playerCards.append(cardImg);
    playerTotal += getValue(card);
    console.log("Player Total:" + playerTotal)
}
function dealerHit(){
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card.value +"-"+card.suit+ ".png";
    dealerCards.append(cardImg);
    dealerTotal += getValue(card);
    console.log("Dealer Total:" + dealerTotal)
}

function newGame(){
    //game order

    //set div equal to "" so previous game is cleared
    dealerCards.innerHTML = "<h2>Dealer</h2>";
    playerCards.innerHTML = " <h2>Player</h2>";
    
    //reset dealer and player totals
    playerTotal = 0;
    dealerTotal = 0;

    roundCount++;

    //after 5 rounds, put all cards back into deck



//shuffle cards
deck.shuffle();

//place bets if added

//deal player 1 card face up from deck
playerHit()


//deal dealer 1 card face up from deck
dealerHit();

//deal player 1 card face up from deck
playerHit();

//deal dealer 1 card face down from deck
dealerHit();

//player can hit or stand
//if hit, add a card
// check the new total
//if over 21, bust and dealer wins, new round
//unless cards have a A, then turn the 11 to a 1 and keep going, unless still bust, then dealer wins and new round
// if 21 win
//under 21, hit or stand again and repeat

//dealer turn
//show dealer second card to player
//if total 17 or more, stand
//if total 16 or less, hit and repeat
//if over 21, dealer bust and player wins, new round
//unless cards have a A, then turn the 11 to a 1 and keep going, unless still bust, then dealer wins and new round

//after both stand, check player vs dealer total, higher not over 21 wins
//if totals = then tie 

//end of round
//add dealer cards and player cards to discard pile
//increment round counter
//check round counter, every 5 rounds add cards back to deck and reshuffle

//new round


}

function getValue(card){
    if(isNaN(card.value)){
        if(card.value == "A"){
            return 11;
        }
        return 10;
    }
    else{
        return parseInt(card.value)
    }
}
