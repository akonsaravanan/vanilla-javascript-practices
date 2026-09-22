// TODO:
// Render suggestion items based on startsWith and handle click selection.
// console.log(window.SUGGESTIONS);

const suggestionList = document.getElementById('suggestions-list');
const serach = document.getElementById('autocomplete-input');

serach.addEventListener('input', (e) => {
  const data = serach?.value?.trim()?.toLowerCase();
  suggestionList.innerHTML = '';
  if (data) {
    const filter = [...window.SUGGESTIONS]
      .map((item) => item.toLowerCase().startsWith(data) && item)
      .filter((rec) => rec);
    if (filter.length > 0) {
      let final = '';
      filter.forEach((data) => {
        final += `<li class='list-text'>${data}</li>`;
      });
      suggestionList.insertAdjacentHTML('beforeend', final);
    }
  }
});

// / Event delegation for selecting a suggestion
suggestionList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    serach.value = e.target.textContent;
    suggestionList.innerHTML = '';
  }
});
