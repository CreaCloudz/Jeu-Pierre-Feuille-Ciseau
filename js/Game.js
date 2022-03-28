import Player from '/js/Player.js'
import Utils from '/js/Utils.js'

export default class Game {
  constructor() {
    this.player_one = new Player(1);
    this.player_two = new Player(2);
    this.tours = 0;
  }

  init() {
    while (!this.checkPlayerPoints()) {

      // FAIRE LA VALIDATION
      if (Utils.getIsValid(this.player_one, prompt("Choisisez entre pierre feuille ciseau " + this.player_one.name + "."))) {
        this.player_one.last_move = Utils.getIsValid(this.player_one);
      } else if (Utils.getIsValid(this.player_two, prompt("Choisisez entre pierre feuille ciseau " + this.player_two.name + "."))) {
        this.player_two.last_move = Utils.getIsValid(this.player_two);
      }

      // Check winner
      this.checkWinner();

      // Inc tour
      this.incTours();

    }
    this.winner();
  }

  checkPlayerPoints() {
    for (let i = 0; i > Player.playerList.length; i++) {
      if (Player.playerList[i].points > 3) {
        return true;
      }
    }
    return false;
  }

  checkWinner() {
    if (this.player_one.last_move === this.player_two.last_move) {
      prompt("Egalité");
    } else if (this.player_one.last_move === "pierre") {
      if (this.player_two.last_move === "feuille") {
        prompt(this.player_two.name + " a gagné");
        this.player_two.incPoints();
      } else {
        prompt(this.player_one.name + " a gagné");
        this.player_one.incPoints();
      }
    } else if (this.player_one.last_move === "ciseau") {
      if (this.player_two.last_move === "pierre") {
        prompt(this.player_two.name + " a gagné");
        this.player_two.incPoints();
      } else {
        prompt(this.player_one.name + " a gagné");
        this.player_one.incPoints();
      }
    } else if (this.player_one.last_move === "feuille") {
      if (this.player_two.last_move === "ciseau") {
        prompt(this.player_two.name + " a gagné");
        this.player_two.incPoints();
      } else {
        prompt(this.player_one.name + " a gagné");
        this.player_one.incPoints();
      }
    }
    this.player_one.clearLastMove();
    this.player_two.clearLastMove();
  }

  winner() {
    for (let i = 0; i < Player.playerList.length; i++) {
      prompt(Player.playerList[i].name + " a gagné en " + this.tours + " tour" + (this.tours > 1 ? "" : "s") + " !");
    }
  }

  incTours() {
    this.tours++;
  }
}
