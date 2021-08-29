const config = require("./base-setup");
const mongoose = require("mongoose");

function setupMongoose() {
  mongoose.connect(config["db-link"], { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;

  db.on("error", (e) => console.error(`Connection error: ${e}`));
  db.once("open", (e) => console.log(`DB initialized: ${e}`));

  // mongoose.set("useNewUrlParser", true);
  // mongoose.set("useFindAndModify", false);
  // mongoose.set("useCreateIndex", true);
}

module.exports = setupMongoose;
