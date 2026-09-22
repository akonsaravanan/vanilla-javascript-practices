(() => {
  const { input, equal, render } = window.TestUtils;
  const search = document.getElementById('search-input');
  const items = document.querySelectorAll('.fruit-item');
  const visibleCount = () => Array.from(items).filter(i => !i.classList.contains('hidden')).length;

  equal(visibleCount(), 4, 'All items visible on load');
  input(search, 'ap');
  equal(visibleCount(), 2, 'Only Apple and Apricot stay visible for ap');
  input(search, 'BL');
  equal(visibleCount(), 1, 'Search is case-insensitive for BL');
  input(search, '');
  equal(visibleCount(), 4, 'Clearing search shows all items');

  render('Live Search List Tests');
})();
