const fetch = require('node-fetch');

const fetchDataFromExternalApi = (apiURL) => fetch(apiURL)
  .then((res) => res.json());

module.exports = fetchDataFromExternalApi;
