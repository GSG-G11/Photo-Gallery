const $ = (selector) => document.querySelector(selector);

const createElement = (tagName, className = '', txtContent = '') => {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = txtContent;
  return element;
};

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
  toggleLoaderDisplay();
  const dataExists = data.data.length;
  if (dataExists) {
    renderImages(data.data);
  } else {
    throw new Error('No Data');
  }
};

const createLoader = () => {
  const loader = createElement('div', 'loader');
  const loaderRng = createElement('div', 'lds-ring');
  for (let i = 0; i < 4; i++) {
    const loaderElement = createElement('div');
    loaderRng.append(loaderElement);
  }
  loader.append(loaderRng);
  $('body').append(loader);
};

const toggleLoaderDisplay = () => {
  const body = $('body');
  const classToShowLoader = 'show-loader';
  body.classList.contains(classToShowLoader)
    ? body.classList.remove(classToShowLoader)
    : body.classList.add(classToShowLoader);
};
