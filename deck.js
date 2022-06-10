const SUITS = ["Clubs", "Hearts", "Spades", "Diamonds"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


class Deck{
constructor(cards){
    this.cards = cards;
}

//get number of cards in the deck
getnumCards(){
    return this.cards.length;
}

//method to get another card
hit() {
    return this.cards.shift();
}


//get rid of used cards
discard(card){
    this.cards.push(card);

}

//shuffle deck 
shuffle() {

}

}





class Card{

constructor (suit, value){
    this.suit = suit;
    this.value = value;
}

//add a card to html
addCardCode(){

}

//based on suit, display color
getColor(){


}
}

//create a new deck of cards
function newDeck(){

}