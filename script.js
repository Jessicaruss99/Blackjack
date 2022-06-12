import Deck from "./deck.js";

//get value of cards

//create new deck
var deck = new Deck();
console.log(deck.cards);

//initialize round counter and set to 0
var roundCount = 0;

var dealerAce = 0;
var playerAce = 0;

//make constants for each div tag
const status = document.querySelector(".status");
const dealerCards = document.querySelector(".dealer-cards");
const playerCards = document.querySelector(".player-cards");
const dealerCardTotal = document.querySelector(".dealer-total");
const playerCardTotal = document.querySelector(".player-total");

var hiddenCard;

var dealerTotal = 0;
var playerTotal = 0;

var canHit = true;

var statusMessage = "";

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

function stay() {
    while (dealerTotal < 17) {
        dealerHit();
    }

    if (playerTotal > 21) {
        statusMessage = "BUST! You Lose"
    }
    else if (dealerTotal > 21) {

        statusMessage = "You Win"
    }
    else if (dealerTotal == playerTotal) {
        statusMessage = "TIE"
    }
    else if (playerTotal > dealerTotal) {
        statusMessage = "You Win"
    }
    else if (playerTotal < dealerTotal) {
        statusMessage = "You Lose"
    }

    status.innerHTML = "<h2>" + statusMessage + "</h2>";

    revealHiddenCard();
    hitID.hidden = true;
    stayID.hidden = true;
}

function playerHit() {
    let cardImg = document.createElement("img");
    let card = deck.pop();
    if (card.value == "A") {
        playerAce++;
    }
    cardImg.src = "./cards/" + card.value + "-" + card.suit + ".png";
    playerCards.append(cardImg);

    if (playerTotal > 11 && playerAce > 0) {
        playerTotal += getValue(card) - 10;
        //console.log(playerTotal)
    } else {
        playerTotal += getValue(card);
        //console.log(playerTotal)
    }


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
    dealerTotal += getValue(card);
    //console.log("Dealer Total:" + dealerTotal)
    dealerCardTotal.innerHTML = "<h2>Dealer Total: " + dealerTotal + "</h2>";


}
function dealerHitHidden() {
    let cardImg = document.createElement("img");
    cardImg.setAttribute("id", "hiddenCard")
    let card = deck.pop();
    hiddenCard = card;
    cardImg.src = "./cards/BACK.png";
    dealerCards.append(cardImg);
    dealerTotal += getValue(card);
    //console.log("Dealer Total:" + dealerTotal)
    dealerCardTotal.innerHTML = "<h2>Dealer Total: " + dealerTotal + "</h2>";


}

function revealHiddenCard() {
    document.getElementById("hiddenCard").src = "./cards/" + hiddenCard.value + "-" + hiddenCard.suit + ".png";
}

function newGame() {
    //game order

    //set div equal to "" so previous game is cleared
    dealerCards.innerHTML = "";
    playerCards.innerHTML = "";
    status.innerHTML = "";

    //reset dealer and player totals
    playerTotal = 0;
    dealerTotal = 0;

    roundCount++;

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
