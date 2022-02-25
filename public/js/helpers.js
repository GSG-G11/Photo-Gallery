const $ = (selector) => document.querySelector(selector);

const createElement = (tagName, className = '', txtContent = '') => {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = txtContent;
  return element;
};

const makeRequest = (url) => fetch(url).then((res) => res.json());

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
    img.src = image.images.downsized.url;
    photosContainer.append(img);
  });
};

const copyToClipboard = (text) => {
  const elem = document.createElement('textarea');
  elem.value = text;
  document.body.appendChild(elem);
  elem.select();
  document.execCommand('copy');
  document.body.removeChild(elem);
};

const checkData = (data) => {
  toggleLoader();
  const dataExists = data.data.length;
  if (dataExists) {
    renderImages(data.data);
  } else {
    throw new Error('No Data');
  }
  document.querySelectorAll('img').forEach((img) => {
    img.onclick = (e) => {
      copyToClipboard(e.target.src);
    };
  });
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

const toggleLoader = () => {
  $('body').classList.toggle('show-loader');
};
