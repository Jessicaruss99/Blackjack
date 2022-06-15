import Deck from "./deck.js";

//get value of cards

//create new deck
var deck = new Deck();

//initialize round counter and set to 0
var roundCount = 0;

//initialize variables for number of wins, loses and ties
var wins = 0;
var lose = 0;
var ties = 0;

//initialize hit count so dealer card is revealed after so many hits
// var hitCount = 0;

//make constants for each div tag
const status = document.querySelector(".status");
const stats = document.querySelector(".stats");
const dealerCards = document.querySelector(".dealer-cards");
const playerCards = document.querySelector(".player-cards");
const dealerCardTotal = document.querySelector(".dealer-total");
const playerCardTotal = document.querySelector(".player-total");


var hiddenCard;

var dealerTotal = 0;
var playerTotal = 0;

var canHit = true;

var statusMessage = "";

var playerAceCount = 0;
var dealerAceCount = 0;

//if player unable to hit, disable the hit button
if (canHit == false) {
    hitID.hidden = true;
}

//click listener for hit
const hitID = document.getElementById("hit");
hitID.addEventListener("click", playerHit)

//click listener for stay
const stayID = document.getElementById("stay");
stayID.addEventListener("click", stay)
// document.getElementById("staytest").innerHTML = "Stay Test";

const playID = document.getElementById("playagain");
playID.addEventListener("click", newGame);


window.onload = function () {
    newGame()
};

function newGame() {
    hitID.hidden = false;
    stayID.hidden = false;
    playID.hidden =true;
    roundCount++;

    //game order
    stats.innerHTML =
    "<p>You have " + parseInt(wins) + " wins </p>" +
    "<p>You have " + parseInt(lose) + " loses </p>" +
    "<p>There have been " + parseInt(ties) + " ties </p>" +
    "<p>Round: " + parseInt(roundCount) + "</p>";

    //set div equal to "" so previous game is cleared
    dealerCards.innerHTML = "";
    playerCards.innerHTML = "";
    status.innerHTML = "";
    dealerCardTotal.innerHTML = "<h2>Dealer Total: ";

    //reset dealer and player totals
    playerTotal = 0;
    dealerTotal = 0;

    playerAceCount = 0;
    dealerAceCount = 0;

    // hitCount = 0;

    

    hitID.hidden = false;
    stayID.hidden = false;

    //after 5 rounds, put all cards back into deck
    if (roundCount % 5 == 0) {
        deck = new Deck();
    }

    //shuffle cards
    deck.shuffle();

    //place bets if added

    //deal player 1 card face up from deck
    playerHit()

    //deal dealer 1 card face up from deck
    dealerHitHidden();

    //deal player 1 card face up from deck
    playerHit();

    //deal dealer 1 card face down from deck
    dealerHit();


}

function stay() {
    hitID.hidden = true;
    stayID.hidden = true;

    playerCardTotal.innerHTML = "<h2>Player Total: " + playerTotal + "</h2>";

    dealerCardTotal.innerHTML = "<h2>Dealer Total: " + dealerTotal + "</h2>";


    while (dealerTotal < 17 && playerTotal <= 21) {
        dealerHit();
    }

    if (playerTotal > 21) {

        lose++;
        statusMessage = "BUST! You Lose";
    }
    else if (dealerTotal > 21) {
        wins++;

        statusMessage = "You Win";
    }
    else if (dealerTotal == playerTotal) {
        ties++;
        statusMessage = "TIE";
    }
    else if (playerTotal > dealerTotal) {
        wins++;
        statusMessage = "You Win"
    }
    else if (playerTotal < dealerTotal) {
        lose++;
        statusMessage = "You Lose"
    }

    status.innerHTML = "<h2>" + statusMessage + "</h2>";
    stats.innerHTML =
        "<p>You have " + parseInt(wins) + " wins </p>" +
        "<p>You have " + parseInt(lose) + " loses </p>" +
        "<p>There have been " + parseInt(ties) + " ties </p>" +
        "<p>Round: " + parseInt(roundCount) + "</p>";

    hitID.hidden = true;
    stayID.hidden = true;

    revealHiddenCard();
    playID.hidden =false;
}

function playerHit() {
    // hitCount++;
    // if (hitCount > 2) {
    //     revealHiddenCard();
    // }
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card.value + "-" + card.suit + ".png";
    playerCards.append(cardImg);

    if (card.value == "A") {
        playerAceCount++;
    }

    playerTotal += getValue(card);
    checkAces();

    playerCardTotal.innerHTML = "<h2>Player Total: " + playerTotal + "</h2>";

    if (playerTotal >= 21) {
        stay();
    }
}

function dealerHit() {
    let cardImg = document.createElement("img");
    let card = deck.pop();

    cardImg.src = "./cards/" + card.value + "-" + card.suit + ".png";
    dealerCards.append(cardImg);

    if (card.value == "A") {
        dealerAceCount++;
    }

    dealerTotal += getValue(card);
    checkAcesDealer();

   // dealerCardTotal.innerHTML = "<h2>Dealer Total: " + dealerTotal + "</h2>";


}
function dealerHitHidden() {
    let cardImg = document.createElement("img");
    cardImg.setAttribute("id", "hiddenCard")
    let card = deck.pop();
    hiddenCard = card;
    cardImg.src = "./cards/BACK.png";
    dealerCards.append(cardImg);
    dealerTotal += getValue(card);
    if (card.value == "A") {
        dealerAceCount++;
    }
    checkAcesDealer();

    //dealerCardTotal.innerHTML = "<h2>Dealer Total: " + dealerTotal + "</h2>";

}

function revealHiddenCard() {
    document.getElementById("hiddenCard").src = "./cards/" + hiddenCard.value + "-" + hiddenCard.suit + ".png";
    dealerCardTotal.innerHTML = "<h2>Dealer Total: " + dealerTotal + "</h2>";
}

function getValue(card) {
    if (isNaN(card.value)) {
        if (card.value == "A") {
            return 11;
        }
        return 10;
    }
    else {
        return parseInt(card.value)
    }
}

function checkAces() {
    while (playerAceCount > 0 && playerTotal > 21) {
        playerTotal = playerTotal - 10;
        playerAceCount--;
    }


}

function checkAcesDealer() {
    while (dealerAceCount > 0 && dealerTotal > 21) {
        dealerTotal = dealerTotal - 10;
        dealerAceCount--;
    }


}
