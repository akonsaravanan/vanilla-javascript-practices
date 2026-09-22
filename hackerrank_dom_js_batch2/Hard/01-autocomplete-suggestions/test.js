(async () => {
  const { input, click, equal, render } = window.TestUtils;
  const field = document.getElementById('autocomplete-input');
  const list = document.getElementById('suggestions-list');

  input(field, 'ap');
  equal(list.children.length, 2, 'Shows 2 suggestions for "ap"');
  equal(list.textContent.includes('Apple'), true, 'Apple suggestion appears');
  equal(list.textContent.includes('Apricot'), true, 'Apricot suggestion appears');

  input(field, 'bl');
  equal(list.children.length, 1, 'Shows 1 suggestion for "bl"');
  equal(list.textContent.includes('Blueberry'), true, 'Blueberry suggestion appears');

  click(list.querySelector('li'));
  equal(field.value, 'Blueberry', 'Clicking a suggestion fills the input');
  equal(list.children.length, 0, 'Suggestion list clears after selection');

  render('Autocomplete Tests');
})();
