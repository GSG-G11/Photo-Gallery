const handleHomePage = require('./handleHomePage');
const handleAboutPage = require('./handleAboutPage');
const pageNotFound = require('./pageNotFound');
const serverError = require('./serverError');
const handleSearch = require('./handleSearch');

module.exports = {
  handleHomePage,
  handleAboutPage,
  handleSearch,
  pageNotFound,
  serverError,
};
