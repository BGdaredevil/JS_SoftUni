function solution(input) {
  let instructions = {
    upvote() {
      this.upvotes++;
    },
    downvote() {
      this.downvotes++;
    },
    score() {
      let total = this.upvotes + this.downvotes;
      let ratio = this.upvotes / total;
      let rating;
      let aparentUp = this.upvotes;
      let aparentDown = this.downvotes;

      if (total < 10) {
        rating = "new";
      } else if (ratio > 0.66) {
        rating = "hot";
      } else if (ratio < 20.66 && ratio >= 0.5 && total > 100) {
        rating = "controversial";
      } else if (ratio < 0.5) {
        rating = "unpopular";
      } else {
        rating = "new";
      }

      if (total > 50) {
        let bonus = Math.ceil(Math.max(aparentUp, aparentDown) * 0.25);
        aparentUp = aparentUp + bonus;
        aparentDown = aparentDown + bonus;
      }

      return [aparentUp, aparentDown, aparentUp - aparentDown, rating];
    },
  };
  return instructions[input].call(this);
}

let post = {
  id: "3",
  author: "emil",
  content: "wazaaaaa",
  upvotes: 133,
  downvotes: 68,
};
//solution.call(post, "upvote");
//solution.call(post, "downvote");
let score = solution.call(post, "score"); // [127, 127, 0, 'controversial']
console.log(score);
solution.call(post, "downvote"); // (executed 50 times)
score = solution.call(post, "score"); // [139, 189, -50, 'unpopular']
