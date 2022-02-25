const router = require('express').Router();

const {
  pageNotFound,
  handleSearch,
  serverError,
  handleAboutPage,
} = require('../controllers');

router.get('/about', handleAboutPage);
router.get('/search', handleSearch);
router.use(pageNotFound);
router.use(serverError);

module.exports = router;
