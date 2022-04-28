const { Test } = require('../db/models');

class CardController {
  async cardRender(req, res) {
    try {
      const allCard = await Test.findAll();
      res.render('card', { allCard });
    } catch (err) {
      if (err) {
        console.log(err);
        res.status(400).json({ message: 'error', err });
      }
    }
  }

  async cardAddRender(req, res) {
    try {
      res.render('addCard');
    } catch (err) {
      if (err) {
        console.log(err);
        res.status(400).json({ message: 'error', err });
      }
    }
  }
  // async cardRender(req, res) {
  //   try {

  //   } catch (err) {

  //   }
  // }
}
module.exports = new CardController();
