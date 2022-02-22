const { join } = require('path');

const handleAboutPage = (req, res) => {
  res.sendFile(join(__dirname, '../../public/html/about.html'));
};

module.exports = handleAboutPage;
