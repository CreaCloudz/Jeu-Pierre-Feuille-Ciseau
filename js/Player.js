const playerList = [];
export default class Player {
  static playerList = [];
  constructor(number) {
    this.name = prompt("Nom du joueur " + number);
    this.points = 0;
    this.last_move = "";

    playerList.push(this);
  }

  clearLastMove() {
    this.last_move = "";
  }

  incPoints() {
    this.points++;
  }
}