const handleHomePage = require('./handleHomePage');
const handleAboutPage = require('./handleAboutPage');
const pageNotFound = require('./pageNotFound');
const serverError = require('./serverError');

module.exports = {
  handleHomePage,
  handleAboutPage,
  pageNotFound,
  serverError,
};
