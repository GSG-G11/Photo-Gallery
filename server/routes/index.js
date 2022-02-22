const router = require('express').Router();
const {
  handleHomePage,
} = require('../controllers');

router.get('/', handleHomePage);

module.exports = router;
