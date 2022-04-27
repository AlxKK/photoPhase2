const router = require("express").Router();
const { User, Album, Photo } = require("../db/models");

router.route("/").get(async (req, res) => {
  let userName;
  const { uid } = req.session;
  const user = uid && (await User.findByPk(Number(uid)));
  console.log(">>>>>>>>>>>>", user);
  const isAuthorized = !!user;
  if (isAuthorized) userName = user.name;
  const albums = await Album.findAll();
  const photos = await Photo.findAll();
  console.log(photos);
  res.render("main", {
    isAuthorized,
    userName,
    albums,
    photos,
  });
});

module.exports = router;
