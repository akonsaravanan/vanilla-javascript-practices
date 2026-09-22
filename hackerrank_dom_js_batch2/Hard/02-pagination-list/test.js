(() => {
  const { click, equal, render } = window.TestUtils;
  const list = document.getElementById('page-list');
  const info = document.getElementById('page-info');
  const prev = document.getElementById('prev-btn');
  const next = document.getElementById('next-btn');

  equal(list.children.length, 3, 'Page 1 shows 3 items on load');
  equal(info.textContent.trim(), 'Page 1 of 3', 'Page info starts at Page 1 of 3');

  click(next);
  equal(info.textContent.trim(), 'Page 2 of 3', 'Next moves to page 2');
  equal(list.textContent.includes('Item 4'), true, 'Page 2 shows Item 4');

  click(next);
  equal(info.textContent.trim(), 'Page 3 of 3', 'Next moves to page 3');
  equal(list.children.length, 1, 'Last page shows remaining 1 item');
  equal(list.textContent.includes('Item 7'), true, 'Last page shows Item 7');

  click(next);
  equal(info.textContent.trim(), 'Page 3 of 3', 'Next does not go beyond last page');

  click(prev);
  equal(info.textContent.trim(), 'Page 2 of 3', 'Prev goes back to page 2');

  render('Pagination Tests');
})();
