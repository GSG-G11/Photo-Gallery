const fetchDataFromExternalApi = require('../helpers/fetchDataFromExternalApi');

const handleSearch = (req, res, next) => {
  const { q: searchTerm, limit } = req.query;
  const { API_KEY } = process.env;
  const apiURL = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=${limit}&api_key=${API_KEY}`;
  if (searchTerm.trim() !== '') {
    fetchDataFromExternalApi(apiURL)
      .then((data) => res.json(data))
      .catch((err) => next(err));
  } else {
    res.status(400).json({ message: 'Bad Request!' });
  }
};

module.exports = handleSearch;
