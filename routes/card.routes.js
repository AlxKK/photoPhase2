const controller = require('../controllers/cardController');
const router = require('express').Router();

router.get('/card', controller.cardRender);
router.get('/add/card', controller.cardAddRender);
module.exports = router;
