// TODO: Write your solution here.
// Requirements:
// 1) Add a 300ms debounce on the input event of #search.
// 2) Filter .search-item elements case-insensitively.
// 3) Add/remove a .hidden class to hide/show items.
const search = document.getElementById('search');
const items = document.querySelectorAll('.search-item');

let timer;

search.addEventListener('input', () => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    const value = search.value.toLowerCase();

    items.forEach((item) => {
      const text = item.textContent.toLowerCase();

      if (text.includes(value)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }, 300);
});
