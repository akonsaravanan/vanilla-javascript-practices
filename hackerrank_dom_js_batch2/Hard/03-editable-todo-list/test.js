(() => {
  const { input, click, equal, render } = window.TestUtils;
  const field = document.getElementById('todo-input');
  const addBtn = document.getElementById('add-btn');
  const list = document.getElementById('todo-list');

  input(field, 'Learn DOM');
  click(addBtn);
  equal(list.children.length, 1, 'Adds one todo item');
  equal(list.textContent.includes('Learn DOM'), true, 'Added text is visible');
  equal(list.textContent.includes('Edit'), true, 'Edit button exists');
  equal(list.textContent.includes('Delete'), true, 'Delete button exists');

  click(list.querySelector('.edit-btn'));
  const editInput = list.querySelector('.edit-input');
  equal(!!editInput, true, 'Edit mode shows an input');
  input(editInput, 'Learn DOM deeply');
  click(list.querySelector('.save-btn'));
  equal(list.textContent.includes('Learn DOM deeply'), true, 'Save updates the text');

  click(list.querySelector('.delete-btn'));
  equal(list.children.length, 0, 'Delete removes the item');

  render('Editable Todo Tests');
})();
