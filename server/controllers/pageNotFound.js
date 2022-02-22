const { join } = require('path');

const pageNotFound = (req, res, next) => {
  res.sendFile(join(__dirname, '../../public/html/404.html'));
};

module.exports = pageNotFound;
