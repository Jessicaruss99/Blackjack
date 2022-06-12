const SUITS = ["Clubs", "Hearts", "Spades", "Diamonds"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


export default class Deck{
constructor(cards = newDeck()){
    this.cards = cards;
}

//get number of cards in the deck
get numCards(){
    return this.cards.length;
}

//method to get another card
pop() {
    return this.cards.shift();
}


//get rid of used cards
discard(card){
    this.cards.push(card);

}

//shuffle deck 
shuffle() {


    for (let i = this.numCards - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (i + 1))
        const oldValue = this.cards[newIndex]
        this.cards[newIndex] = this.cards[i]
        this.cards[i] = oldValue

}
}

}





class Card{

constructor (suit, value){
    this.suit = suit;
    this.value = value;
}

//add a card to html
// getHTML(){
//     const cardDiv = document.createElement("div");
//     cardDiv.innerText = this.suit + this.value;
//     cardDiv.dataset.value = `${this.value} ${this.suit}`
//     return cardDiv;
// }

// getValue(){

// }

//based on suit, display color
get color(){
    if(this.suit == "Clubs" || this.suit == "Spades"){
        return black;
    }
    else{
        return red;
    }

}
}

//create a new deck of cards
function newDeck(){
    return VALUES.flatMap(value=>{
        return SUITS.map(suit=>{
            return new Card(suit,value);
        })
    })

}