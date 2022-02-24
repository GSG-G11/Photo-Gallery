const fetchDataFromExternalApi = require('../helpers/fetchDataFromExternalApi');

const handleSearch = (req, res) => {
  const { searchTerm, limit } = req.body;
  const { API_KEY } = process.env;
  const apiURL = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=${limit}&api_key=${API_KEY}`;
  fetchDataFromExternalApi(apiURL)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send(err));
};

module.exports = handleSearch;
