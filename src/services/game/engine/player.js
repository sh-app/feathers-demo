export default class Player {
  constructor(name, chips) {
    this.name = name;
    this.chips = chips;
    this.folded = false;
    this.allIn = false;
    this.hand = [];
    this.currentBet = 0;
  }

  receiveCards(cards) {
    this.hand = cards;
  }

  putChips(amount) {
    if ( amount <= this.chips) {
      this.chips -= amount;
    } else {
      return 'Not enough chips';
    }
  }

  fold() {
    this.hand = [];
    this.folded = true;
  }

  bet(amount) {
    if (amount <= this.chips) {
      this.chips -= amount;
      this.bet += amount;
    }
  }

  raise(amount) {
    if (amount <= this.chips) {
      this.chips -= amount;
      this.bet += amount;
    }
  }

  newRound() {
    this.folded = false;
    this.hand = [];
    this.currentBet = 0;
  }

}
