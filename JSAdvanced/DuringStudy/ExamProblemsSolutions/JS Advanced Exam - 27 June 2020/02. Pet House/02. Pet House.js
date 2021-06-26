function solveClasses() {
  class Pet {
    constructor(owner, name) {
      this.owner = owner;
      this.name = name;
      this.comments = [];
    }

    addComment(str) {
      if (this.comments.includes(str)) {
        throw new Error("This comment is already added!");
      }
      this.comments.push(str);
      return "Comment is added.";
    }

    feed() {
      return `${this.name} is fed`;
    }

    toString() {
      if (this.comments.length > 0) {
        return `Here is ${this.owner}'s pet ${
          this.name
        }\nSpecial requirements: ${this.comments.join(", ")}`;
      }
      return `Here is ${this.owner}'s pet ${this.name}.`;
    }
  }

  class Cat extends Pet {
    constructor(owner, name, insideHabits, scratching) {
      super(owner, name);
      this.insideHabits = insideHabits;
      this.scratching = scratching;
    }

    feed() {
      return `${super.feed()}, happy and purring.`;
    }

    toString() {
      let txt = [
        super.toString(),
        `Main information:`,
        `${this.name} is a cat with ${this.insideHabits}`,
      ];
      if (this.scratching) {
        txt[txt.length - 1] += ", but beware of scratches.";
      }
      return txt.join("\n");
    }
  }

  class Dog extends Pet {
    constructor(owner, name, runningNeeds, trainability) {
      super(owner, name);
      this.runningNeeds = runningNeeds;
      this.trainability = trainability;
    }

    feed() {
      return `${super.feed()}, happy and wagging tail.`;
    }

    toString() {
      let txt = [
        super.toString(),
        `Main information:`,
        `${this.name} is a dog with need of ${this.runningNeeds}km running every day and ${this.trainability} trainability.`,
      ];
      return txt.join("\n");
    }
  }

  return { Pet, Cat, Dog };
}
