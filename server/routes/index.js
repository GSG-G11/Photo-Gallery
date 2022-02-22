const router = require('express').Router();
const {
  handleHomePage,
  handleAboutPage,
} = require('../controllers');

router.get('/', handleHomePage);

router.get('/about', handleAboutPage);

module.exports = router;
