function solve() {
  class Post {
    constructor(/*...input */ t, c) {
      //   let index = 0;
      this.title = t; // input[index++];
      this.content = c; // input[index++];
    }
    toString() {
      return [`Post: ${this.title}`, `Content: ${this.content}`].join("\n");
    }
  }
  class SocialMediaPost extends Post {
    constructor(/*...input */ t, c, l, d) {
      //   let index = 0;
      super(/*input[index++], input[index++]*/ t, c);
      this.likes = l; // input[index++];
      this.dislikes = d; // input[index++];
      this.comments = [];
    }
    addComment(str) {
      this.comments.push(str);
    }
    toString() {
      let temp = [super.toString()];
      temp.push(`Rating: ${this.likes - this.dislikes}`);
      if (this.comments.length > 0) {
        temp.push(
          ...this.comments.reduce((a, e) => (a.push(` * ${e})`), a), [
            "Comments:",
          ])
        );
      }
      return temp.join("\n");
    }
  }
  class BlogPost extends Post {
    constructor(/*...input */ t, c, v) {
      //   let index = 0;
      super(/*input[index++], input[index++]*/ t, c);
      this.views = v; // input[index++];
    }
    view() {
      this.views++;
      return this;
    }
    toString() {
      let temp = [super.toString()];
      temp.push(`Views: ${this.views}`);
      return temp.join("\n");
    }
  }
  return { Post, SocialMediaPost, BlogPost };
}

const classes = solve();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

let item = new classes.BlogPost("TestTitle", "TestContent", 0);
item.view().view().view();
console.log(item.toString());
