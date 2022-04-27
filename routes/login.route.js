const router = require("express").Router();
const { User } = require("../db/models");
const bcrypt = require("bcrypt");
// const res = require("express/lib/response");
//
router
  .route("/")
  .get((req, res) => {
    res.render("login");
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    const newUser = await User.findOne({ where: { email } });
    const { uid } = req.session;
    const createdUser = await User.findOne({ where: { email } });
    req.session.uid = createdUser.id;

    if (newUser && (await bcrypt.compare(password, newUser.password))) {
      res.redirect("/");
    } else {
      res.send("error");
    }
  });

//
module.exports = router;
