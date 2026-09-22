(() => {
  const { input, click, equal, render } = window.TestUtils;
  const name = document.getElementById('name-input');
  const phone = document.getElementById('phone-input');
  const add = document.getElementById('add-btn');
  const search = document.getElementById('search-input');
  const sort = document.getElementById('sort-btn');
  const body = document.getElementById('directory-body');
  const rows = () => Array.from(body.querySelectorAll('tr'));
  const names = () => rows().map(r => r.children[0].textContent.trim());

  click(add);
  equal(document.getElementById('name-error').textContent.trim().length > 0, true, 'Shows name error on empty add');
  equal(document.getElementById('phone-error').textContent.trim().length > 0, true, 'Shows phone error on empty add');

  input(name, 'Saravanan');
  input(phone, '9876543210');
  click(add);
  equal(rows().length, 1, 'Adds valid contact');

  input(name, 'Kannan');
  input(phone, '9123456780');
  click(add);
  equal(rows().length, 2, 'Adds second valid contact');

  click(sort);
  equal(JSON.stringify(names()), JSON.stringify(['Kannan', 'Saravanan']), 'Sort ascending works');

  input(search, '9876');
  equal(rows().length, 1, 'Search filters by phone');
  equal(body.textContent.includes('Saravanan'), true, 'Search result shows matching row');

  input(search, '');
  equal(rows().length, 2, 'Clearing search restores all rows');

  render('Phone Directory Lite Tests');
})();
