const { join } = require('path');

const handleHomePage = (req, res) => {
  res.sendFile(join(__dirname, '../../public/index.html'));
};

module.exports = handleHomePage;
