import Card from './card';

const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const SUITS = ['S', 'C', 'H', 'D'];

export default class Deck {
  constructor() {
    this.cards = [];
    for (var i = 0; i < RANKS.length; i++) {
      for (var j = 0; j < SUITS.length; j++) {
        this.cards.push(new Card(SUITS[j], RANKS[i]));
      }
    }
    this.shuffle();
  }

  dealCards(n) {
    let dealtCards = [];
    for (var i = 0; i < n; i++) {
      dealtCards.push(this.cards.shift());
    }
    return dealtCards;
  }

  shuffle() {
    let count = this.cards.length, temp, index;

    while (count) {
      index = Math.floor(Math.random() * count);
      count --;
      temp = this.cards[count];
      this.cards[count] = this.cards[index];
      this.cards[index] = temp;
    }
  }

}
