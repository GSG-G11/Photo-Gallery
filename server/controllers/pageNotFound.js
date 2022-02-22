const { join } = require('path');

const pageNotFound = (req, res, next) => {
  res.status(404).sendFile(join(__dirname, '../../public/html/404.html'));
};

module.exports = pageNotFound;
