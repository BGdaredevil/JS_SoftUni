function solve(input) {
  let result = [];

  for (const el of input) {
    let newCard;
    if (el.length === 3) {
      let temp = el.slice(0, 2);
      try {
        newCard = card(temp, el[2]).toString();
      } catch (error) {
        console.log(`Invalid card: ${el}`);
      }
    } else {
      try {
        newCard = card(...el.split("")).toString();
      } catch (error) {
        console.log(`Invalid card: ${el}`);
        return;
      }
    }
    result.push(newCard);
  }

  console.log(result.join(" "));

  function card(face, suit) {
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
}
// console.log(solve(["AS", "10D", "KH", "2C"]));
// console.log(solve(["5S", "3D", "QD", "1C"]));

let log = [];
let oldCon = console.log;
console.log = (str) => log.push(str);

solve(["AS", "10D", "KH", "2C"]);
let ss;
//expect(log[0]).to.contains('A\u2660');
//expect(log[0]).to.contains('10\u2666');
//expect(log[0]).to.contains('K\u2665');
//expect(log[0]).to.contains('2\u2663');

console.log = oldCon;
