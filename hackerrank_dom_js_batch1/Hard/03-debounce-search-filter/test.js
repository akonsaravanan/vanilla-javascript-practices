(async function () {
  const { assert, equal, input, sleep, render } = window.TestUtils;
  const search = document.getElementById('search');
  const items = Array.from(document.querySelectorAll('.search-item'));
  const visibleCount = () => items.filter(item => !item.classList.contains('hidden')).length;

  equal(visibleCount(), 5, 'All items are visible on load');

  input(search, 'ap');
  await sleep(100);
  equal(visibleCount(), 5, 'Items are not filtered immediately before debounce delay');

  await sleep(250);
  equal(visibleCount(), 2, 'Only matching items remain visible after debounce delay');
  assert(!items[0].classList.contains('hidden'), 'Apple remains visible for search "ap"');
  assert(!items[2].classList.contains('hidden'), 'Apricot remains visible for search "ap"');

  input(search, 'BL');
  await sleep(350);
  equal(visibleCount(), 1, 'Filtering is case-insensitive');
  assert(!items[3].classList.contains('hidden'), 'Blueberry remains visible for search "BL"');

  input(search, '');
  await sleep(350);
  equal(visibleCount(), 5, 'Clearing the input shows all items again');

  render('Debounce Search Tests');
})();
