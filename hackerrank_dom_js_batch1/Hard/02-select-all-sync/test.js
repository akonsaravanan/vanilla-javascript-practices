(async function () {
  const { assert, equal, click, render } = window.TestUtils;
  const selectAll = document.getElementById('select-all');
  const items = Array.from(document.querySelectorAll('.item-checkbox'));
  const count = document.getElementById('selected-count');

  equal(count.textContent.trim(), '0', 'Selected count starts at 0');
  click(selectAll);
  assert(items.every(i => i.checked), 'Checking Select All checks all item checkboxes');
  equal(count.textContent.trim(), String(items.length), 'Selected count updates when Select All is checked');

  click(items[1]);
  assert(!selectAll.checked, 'Unchecking one item unchecks Select All');
  equal(count.textContent.trim(), String(items.length - 1), 'Selected count decreases when one item is unchecked');

  click(items[1]);
  assert(selectAll.checked, 'Select All becomes checked again when all items are checked manually');
  equal(count.textContent.trim(), String(items.length), 'Selected count returns to full when all items are checked');

  click(selectAll);
  assert(items.every(i => !i.checked), 'Unchecking Select All clears all item checkboxes');
  equal(count.textContent.trim(), '0', 'Selected count becomes 0 when all are unchecked');

  render('Select All Sync Tests');
})();
