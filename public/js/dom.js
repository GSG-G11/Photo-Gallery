const form = document.forms[0];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = form.searchTerm.value;
  const imgsNum = form.limit.value || 5;

  if (input.trim() !== '' && isNaN(input) && (+imgsNum > 0 && +imgsNum <= 50)) {
    toggleLoader();
    makeRequest(`/search?q=${input}&limit=${imgsNum}`)
      .then((checkData))
      .catch(() => invalidInput(`Sorry, we don't have ${input}`));
  } else {
    invalidInput('Search Term should be a word and images number should be in the range 1 >= image number <= 50');
  }
});

document.addEventListener('click', (e) => {
  if ($('.invalid-input') && e.target.className !== 'invalid-input') {
    $('.invalid-input').remove();
  }
});

createLoader();
