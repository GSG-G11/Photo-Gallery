/* eslint-disable no-undef */
const $ = (selector) => document.querySelector(selector);

const searchTerm = $('.search');
const limit = $('.limit-of-pictures-number');
const photosContainer = $('.photos');
const form = document.forms[0];
const { body } = document;

const invalidInput = (message) => {
  const errorMsg = document.createElement('div');
  errorMsg.className = 'invalid-input';
  errorMsg.textContent = message;
  body.append(errorMsg);
};

const renderImages = (data) => {
  photosContainer.textContent = '';
  data.forEach((image) => {
    const img = document.createElement('img');
    img.src = image.images.original.url;
    photosContainer.append(img);
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = searchTerm.value;
  const imgsNum = limit.value;

  if (input.trim() !== '' && isNaN(input) && (+imgsNum > 0 && +imgsNum <= 20)) {
    makeRequest({ searchTerm: input, limit: imgsNum }, '/search', 'POST')
      .then((data) => renderImages(data.data))
      .catch(() => invalidInput(`Sorry, we don't have ${input}`));
  } else {
    invalidInput('Search Term should be a word and images number should be in the range 1 >= image number <= 20');
  }
});

document.addEventListener('click', (e) => {
  if ($('.invalid-input') && e.target.className !== 'invalid-input') {
    $('.invalid-input').remove();
  }
});
