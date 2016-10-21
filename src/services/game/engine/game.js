import Deck from './deck';
import Player from './player';

export default class Game {
  constructor(id, name, eventEmitter) {
    this.id = id;
    this.name = name;
    this.player1 = new Player('guest1', 1000);
    this.player2 = new Player('guest2', 1000);
    this.deck = new Deck();
    this.pot = 0;
    this.board = [];
    this.currentPlayer = this.player1;
    this.eventEmitter = eventEmitter;
  }

  emitEvent(eventType, data) {
    this.eventEmitter(eventType, data);
  }
  
  play() {
    if (this.gameOver) {
      return "game over"; //change this!
    } else {
      this.newRound();
    }
  }
  newRound() {
    this.newDeal();
    this.player1.putChips(5);
    this.player2.putChips(10);
  }

  switchTurn() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }

  gameOver() {
    return;
  }
}
