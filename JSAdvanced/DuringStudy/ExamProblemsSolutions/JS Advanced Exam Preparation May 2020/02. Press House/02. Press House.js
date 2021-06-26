function pressHouse() {
  class Article {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      return `Title: ${this.title}\nContent: ${this.content}`;
    }
  }

  class ShortReports extends Article {
    constructor(title, content, originalResearch) {
      if (content.length > 150) {
        throw new Error(
          "Short reports content should be less then 150 symbols."
        );
      }
      super(title, content);
      this.comments = [];
      if (
        !originalResearch.hasOwnProperty("title") ||
        !originalResearch.hasOwnProperty("author")
      ) {
        throw new Error("The original research should have author and title.");
      }
      this.originalResearches = originalResearch; // originalResearch?????
    }

    addComment(str) {
      this.comments.push(str);
      return `The comment is added.`;
    }

    toString() {
      let row = [
        `${super.toString()}`,
        `Original Research: ${this.originalResearches.title} by ${this.originalResearches.author}`,
      ];
      if (this.comments.length > 0) {
        row.push("Comments:");
        this.comments.reduce((a, e) => a.push(e), row);
      }
      return row.join("\n");
    }
  }

  class BookReview extends Article {
    constructor(title, content, book) {
      super(title, content);
      this.clients = [];
      this.book = book;
    }

    addClient(name, order) {
      if (this.clients.some((e) => e.name === name)) {
        throw new Error("This client has already ordered this review.");
      }

      this.clients.push({ name, order });
      return `${name} has ordered a review for ${this.book.name}`;
    }

    toString() {
      let row = [`${super.toString()}`, `Book: ${this.book.name}`];
      if (this.clients.length > 0) {
        row.push("Orders:");
        this.clients.reduce((a, e) => a.push(`${e.name} - ${e.order}`), row);
      }
      return row.join("\n");
    }
  }

  return { Article, ShortReports, BookReview };
}
