const router = require('express').Router();
const { check } = require('express-validator');
const controller = require('../controllers/authController');

router.get('/registration', controller.renderReg);
router.post(
  '/registration',
  [
    check('email', 'email пользователя не может быть пустым').notEmpty(),
    check('password', 'Пароль должен быть не менее 3 символов, и не более 12').isLength({ min: 3, max: 12 })],
  controller.registration,
);
router.get('/login', controller.renderLogin);
router.post('/login', controller.login);

// Logout
router.get('/logout', controller.logout);
// router.get('/users', controller.getUsers);
module.exports = router;
