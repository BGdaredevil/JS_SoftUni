function solve(face, suit) {
  let validSuits = { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" };
  let validFaces = [
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

  face = face.toUpperCase();
  suit = suit.toUpperCase();

  if (validFaces.includes(face) == false) {
    throw new Error("Error invalid Suit");
  } else if (Object.keys(validSuits).includes(suit) == false) {
    throw new Error("Error invalid Face");
  }

  return {
    face,
    suit,
    toString() {
      return `${face}${validSuits[suit]}`;
    },
  };
}
console.log(new solve("A", "S").toString());
