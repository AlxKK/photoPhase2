const router = require("express").Router();
const { User } = require("../db/models");

router.route("/").get(async (req, res) => {
  const user = await User.findAll();
  res.render("main", { user });
});

module.exports = router;
