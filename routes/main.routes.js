const router = require('express').Router();
const controller = require('../controllers/mainController');

router.get('/', controller.getRenderMain);
module.exports = router;
// router.get('/', (req, res) => {
//   const { user } = req.session;
//   console.log('🚀 ~ router.get ~ user', user);
//   res.render('main', user);
// });
// module.exports = router;
