const router = require("express").Router();
const { User } = require("../db/models");
const bcrypt = require("bcrypt");
//
router
  .route("/")
  .get(async (req, res) => {
    // const { uid } = req.session;
    // const user = uid && await User.findByPk(Number(uid));
    // const isAuthorized = !!user;
    res.render("regis");
  })
  .post(async (req, res) => {
    const { name, email, password } = req.body;
    const { uid } = req.session;
    const newUser = await User.findOne({ where: { email } });
    if (newUser) {
      res.send("Email is already taken");
    }
    await User.create({
      name,
      email,
      password: await bcrypt.hash(password, 3),
    });
    const createdUser = await User.findOne({ where: { email } });
    req.session.uid = createdUser.id;
    res.redirect("/");
  });
//
module.exports = router;
