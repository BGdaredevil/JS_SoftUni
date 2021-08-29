const handlebars = require("express-handlebars");
const express = require("express");
const cookieParser = require("cookie-parser");

function setupViewEngine(app) {
  app.engine("hbs", handlebars({ extname: "hbs" }));
  app.set("view engine", "hbs");
  app.use(express.static("public"));
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(cookieParser());
}

module.exports = setupViewEngine;
