class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }

  get likes() {
    if (this._likes.length === 0) {
      return `${this.title} has 0 likes`;
    }
    if (this._likes.length === 1) {
      return `${this._likes[0]} likes this story!`;
    }
    return `${this._likes[0]} and ${
      this._likes.length - 1
    } others like this story!`;
  }

  like(username) {
    if (this.creator === username) {
      throw new Error("You can't like your own story!");
    }
    if (this._likes.includes(username)) {
      throw new Error("You can't like the same story twice!");
    }
    this._likes.push(username);
    return `${username} liked ${this.title}!`;
  }
  dislike(username) {
    if (this._likes.includes(username)) {
      this._likes = this._likes.filter((el) => el != username);
      return `${username} disliked ${this.title}`;
    }
    throw new Error("You can't dislike this story!");
  }
  comment(username, content, id) {
    if (id === undefined) {
      id = this._comments.length + 1;
    }
    if (isNaN(id)) {
      throw new Error("Id should be a number");
    }
    if (id <= 0) {
      throw new Error("Id is zero or negative");
    }

    if (this._comments[id - 1] === undefined) {
      this._comments.push({
        Id: this._comments.length + 1,
        Username: username,
        Content: content,
        Replies: [],
      });
      return `${username} commented on ${this.title}`;
    } else {
      let com = this._comments[id - 1];
      com.Replies.push({
        Id: Number(`${com.Id}.${com.Replies.length + 1}`),
        Username: username,
        Content: content,
      });
      return `You replied successfully`;
    }
  }
  toString(sortOrder) {
    let dir = {
      asc(storyObj) {
        let rows = [];
        rows.push(
          `Title: ${storyObj.title}`,
          `Creator: ${storyObj.creator}`,
          `Likes: ${storyObj._likes.length}`,
          `Comments:`
        );
        storyObj._comments
          .sort((a, b) => a.Id - b.Id)
          .map((com) => {
            rows.push(`-- ${com.Id}. ${com.Username}: ${com.Content}`);
            if (Object.values(com.Replies).length > 0) {
              let sortedCom = Object.values(com.Replies).sort(
                (a, b) => a.Id - b.Id
              );
              printer(sortedCom, rows, "---");
            }
          });
        return rows.join("\n");
      },
      desc(storyObj) {
        let rows = [];
        rows.push(
          `Title: ${storyObj.title}`,
          `Creator: ${storyObj.creator}`,
          `Likes: ${storyObj._likes.length}`,
          `Comments:`
        );
        storyObj._comments
          .sort((a, b) => b.Id - a.Id)
          .map((com) => {
            rows.push(`-- ${com.Id}. ${com.Username}: ${com.Content}`);
            if (Object.values(com.Replies).length > 0) {
              let sortedCom = Object.values(com.Replies).sort(
                (a, b) => b.Id - a.Id
              );
              printer(sortedCom, rows, "---");
            }
          });
        return rows.join("\n");
      },
      username(storyObj) {
        let rows = [];
        rows.push(
          `Title: ${storyObj.title}`,
          `Creator: ${storyObj.creator}`,
          `Likes: ${storyObj._likes.length}`,
          `Comments:`
        );
        storyObj._comments
          .sort((a, b) => a.Username.localeCompare(b.Username))
          .map((com) => {
            rows.push(`-- ${com.Id}. ${com.Username}: ${com.Content}`);
            if (Object.values(com.Replies).length > 0) {
              let sortedCom = Object.values(com.Replies).sort((a, b) =>
                a.Username.localeCompare(b.Username)
              );
              printer(sortedCom, rows, "---");
            }
          });
        return rows.join("\n");
      },
    };
    function printer(arr, dest, delim) {
      arr.map((val) =>
        dest.push(`${delim} ${val.Id}. ${val.Username}: ${val.Content}`)
      );
    }
    return dir[sortOrder](this);
  }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log();
console.log(art.toString("username"));
console.log();
art.like("Zane");
console.log(art.toString("desc"));
