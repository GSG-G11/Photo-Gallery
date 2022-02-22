const router = require('express').Router();

const {
  handleHomePage,
  pageNotFound,
  serverError,
  handleAboutPage,
} = require('../controllers');

router.get('/', handleHomePage);
router.get('/about', handleAboutPage);
router.use(pageNotFound);
router.use(serverError);

module.exports = router;
