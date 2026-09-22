(async function () {
  const { assert, click, render } = window.TestUtils;
  const btn = document.getElementById('dropdown-btn');
  const menu = document.getElementById('dropdown-menu');
  const outside = document.querySelector('.outside-area');

  assert(!menu.classList.contains('open'), 'Dropdown is closed by default');
  click(btn);
  assert(menu.classList.contains('open'), 'Dropdown opens when button is clicked');
  click(menu.querySelector('li'));
  assert(menu.classList.contains('open'), 'Dropdown stays open when clicking inside the menu');
  click(outside);
  assert(!menu.classList.contains('open'), 'Dropdown closes when clicking outside');

  render('Dropdown Tests');
})();
