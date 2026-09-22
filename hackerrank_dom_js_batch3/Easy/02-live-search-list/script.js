// TODO:
// Implement a live case-insensitive search filter.
const searchInput = document.getElementById('search-input');
const fruitItems = document.querySelectorAll('.fruit-item');

searchInput.addEventListener('input', function () {
  const searchValue = searchInput.value.toLowerCase();

  fruitItems.forEach(function (item) {
    const fruitName = item.textContent.toLowerCase();

    if (fruitName.includes(searchValue)) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
});
