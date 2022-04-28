const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

class AuthController {
  async renderReg(req, res) {
    try {
      res.render('registration');
    } catch (err) {
      if (err) {
        res.status(400).json({ message: 'Error, try later', err });
      }
    }
  }

  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(402).json({ message: `${errors.errors[0].msg}`, errors });
      }
      const { email, password, role } = req.body;
      const candidate = await User.findOne({ where: { email } });
      if (candidate) {
        res.status(401).json({ message: 'Пользователь с таким Email уже существует' });
      } else {
        const user = await User.create({
          email,
          password: await bcrypt.hash(password, 9),
          role,
        });
        req.session.user = user;
        res.status(200).json({ message: 'Успешная регистрация' });
      }
    } catch (err) {
      if (err) {
        res.status(400).json({ message: 'Error, try later', err });
      }
    }
  }

  async renderLogin(req, res) {
    try {
      res.render('login');
    } catch (err) {
      if (err) {
        res.status(400).json({ message: 'Error, try later', err });
      }
    }
  }

  async login(req, res) {
    try {
      const { email, password, role } = req.body;
      const user = await User.findOne({ where: { email } });
      if (user && await bcrypt.compare(password, user.password)) {
        req.session.user = user;
        res.status(201).json({ message: 'Добро пожаловать' });
      } else {
        res.status(401).json({ message: 'Неверный логин или пароль' });
      }
    } catch (err) {
      if (err) {
        res.redirect('/error');
        res.status(400).json({ message: 'Error, try later', err });
      }
    }
  }

  async logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        return res.redirect('/error');
      }
      res.clearCookie('user_uid');
      return res.redirect('/');
    });
  }
}

module.exports = new AuthController();
