const { assert, expect } = require("chai");
const ChristmasMovies = require("../02. Christmas Movies_Resources");

describe("tests", () => {
  let christmasMovies = "";
  let movieName = "";
  let actors = "";

  beforeEach(() => {
    christmasMovies = new ChristmasMovies();
    movieName = "harry potter";
    actors = ["stamat", "pesho", "gosho"];
  });
  it("Buy movie buys", () => {
    assert.equal(
      christmasMovies.buyMovie(movieName, actors),
      `You just got harry potter to your collection in which stamat, pesho, gosho are taking part!`
    );
  });
  it("Buy movie removes duplicates", () => {
    assert.equal(
      christmasMovies.buyMovie(movieName, [...actors, "stamat"]),
      `You just got harry potter to your collection in which stamat, pesho, gosho are taking part!`
    );
  });
  it("Buy movie throws", () => {
    assert.equal(
      christmasMovies.buyMovie(movieName, actors),
      `You just got harry potter to your collection in which stamat, pesho, gosho are taking part!`
    );
    assert.throws(() => {
      christmasMovies.buyMovie(movieName, actors);
    }, "You already own harry potter in your collection!");
  });
  it("discards correctly", () => {
    christmasMovies.buyMovie(movieName, actors);
    christmasMovies.buyMovie("harry potter 2", [...actors, "ivo"]);
    christmasMovies.buyMovie("harry potter 3", [...actors, "bilal"]);
    christmasMovies.watchMovie("harry potter 2");
    assert.equal(
      christmasMovies.discardMovie("harry potter 2"),
      "You just threw away harry potter 2!"
    );
  });
  it("discards throws correctly", () => {
    christmasMovies.buyMovie(movieName, actors);
    christmasMovies.buyMovie("harry potter 2", [...actors, "ivo"]);
    christmasMovies.buyMovie("harry potter 3", [...actors, "bilal"]);
    assert.throws(() => {
      christmasMovies.discardMovie("harry potter 2");
    }, "harry potter 2 is not watched!");
    assert.throws(() => {
      christmasMovies.discardMovie("harry 2");
    }, "harry 2 is not at your collection!");
  });
  it("watches correctly", () => {
    christmasMovies.buyMovie(movieName, actors);
    christmasMovies.buyMovie("harry potter 2", [...actors, "ivo"]);
    christmasMovies.buyMovie("harry potter 3", [...actors, "bilal"]);
    assert.deepEqual(christmasMovies.watchMovie(movieName), undefined);
    assert.deepEqual(christmasMovies.watchMovie(movieName), undefined);
    assert.deepEqual(christmasMovies.watchMovie(movieName), undefined);
  });
  it("watches trows correctly", () => {
    christmasMovies.buyMovie(movieName, actors);
    christmasMovies.buyMovie("harry potter 2", [...actors, "ivo"]);
    christmasMovies.buyMovie("harry potter 3", [...actors, "bilal"]);
    assert.throws(() => {
      christmasMovies.watchMovie("ivan");
    }, "No such movie in your collection!");
  });
  it("favorites correctly", () => {
    christmasMovies.buyMovie(movieName, actors);
    christmasMovies.buyMovie("harry potter 2", [...actors, "ivo"]);
    christmasMovies.buyMovie("harry potter 3", [...actors, "bilal"]);
    christmasMovies.watchMovie(movieName);
    christmasMovies.watchMovie(movieName);
    christmasMovies.watchMovie("harry potter 2");
    assert.equal(
      christmasMovies.favouriteMovie(),
      "Your favourite movie is harry potter and you have watched it 2 times!"
    );
  });
  it("favorites throws correctly", () => {
    christmasMovies.buyMovie(movieName, actors);
    christmasMovies.buyMovie("harry potter 2", [...actors, "ivo"]);
    christmasMovies.buyMovie("harry potter 3", [...actors, "bilal"]);
    assert.throws(() => {
      christmasMovies.favouriteMovie();
    }, "You have not watched a movie yet this year!");
  });
  it("mostStarredActor throws correctly", () => {
    assert.throws(() => {
      christmasMovies.mostStarredActor();
    }, "You have not watched a movie yet this year!");
  });
  it("mostStarredActor works correctly", () => {
    christmasMovies.buyMovie(movieName, actors);
    christmasMovies.buyMovie("harry potter 2", [...actors, "ivo"]);
    christmasMovies.buyMovie("harry potter 3", [...actors, "bilal"]);
    assert.equal(
      christmasMovies.mostStarredActor(),
      "The most starred actor is stamat and starred in 3 movies!"
    );
  });
});
