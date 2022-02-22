const router = require('express').Router();

const {
  handleHomePage,
  pageNotFound,
  serverError,
  handleAboutPage,
} = require('../controllers');

router.get('/', handleHomePage);
router.use(pageNotFound);
router.use(serverError);

router.get('/about', handleAboutPage);

module.exports = router;
