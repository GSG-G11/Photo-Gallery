const $ = (selector) => document.querySelector(selector);

const makeRequest = (data, route, httpMethod) => fetch(route, {
  method: httpMethod,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
}).then((res) => res.json());

const invalidInput = (message) => {
  const errorMsg = document.createElement('div');
  errorMsg.className = 'invalid-input';
  errorMsg.textContent = message;
  document.body.append(errorMsg);
};

const renderImages = (data) => {
  const photosContainer = $('.photos');
  photosContainer.textContent = '';
  data.forEach((image) => {
    const img = document.createElement('img');
    img.src = image.images.original.url;
    photosContainer.append(img);
  });
};

const checkData = (data) => {
  const dataExists = data.data.length;
  if (dataExists) {
    renderImages(data.data);
  } else {
    throw new Error('No Data');
  }
};
