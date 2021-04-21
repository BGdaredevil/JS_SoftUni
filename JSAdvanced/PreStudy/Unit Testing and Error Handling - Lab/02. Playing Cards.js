function solve(face, suit) {
  class Card {
    constructor(f, s) {
      this.face = f;
      this.suit = s;
    }

    set suit(val) {
      let valid = { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" };
    }

    set face(val) {
      let valid = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A",
      ];
    }
  }
}
