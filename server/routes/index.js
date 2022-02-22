const router = require('express').Router();

const {
  handleHomePage,
  pageNotFound,
  serverError,
} = require('../controllers');

router.get('/', handleHomePage);
router.use(pageNotFound);
router.use(serverError);

module.exports = router;
