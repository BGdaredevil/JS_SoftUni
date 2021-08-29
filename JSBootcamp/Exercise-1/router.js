const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/create", (req, res) => {
  res.render("create");
});
router.get("/details", (req, res) => {
  res.render("details");
});
router.get("/edit", (req, res) => {
  res.render("edit");
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/profile", (req, res) => {
  res.render("profile");
});
router.get("/register", (req, res) => {
  res.render("register");
});

router.get("*", (req, res) => {
  res.send("pesho is lost -- 404");
  res.end();
});

module.exports = router;
