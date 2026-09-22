(async function () {
  const { assert, equal, click, input, render } = window.TestUtils;
  const field = document.getElementById('todo-input');
  const addBtn = document.getElementById('add-todo');
  const list = document.getElementById('todo-list');

  input(field, '   ');
  click(addBtn);
  equal(list.children.length, 0, 'Empty or whitespace-only todo is not added');

  input(field, 'Learn DOM');
  click(addBtn);
  equal(list.children.length, 1, 'A todo is added when valid text is entered');
  equal(field.value, '', 'Input is cleared after adding a todo');

  const firstItem = list.querySelector('.todo-item');
  assert(!!firstItem, 'Todo item has class .todo-item');
  const todoText = firstItem.querySelector('.todo-text');
  const deleteBtn = firstItem.querySelector('.delete-btn');
  assert(!!todoText, 'Todo item contains .todo-text');
  assert(!!deleteBtn, 'Todo item contains .delete-btn');

  click(todoText);
  assert(todoText.classList.contains('done'), 'Clicking todo text toggles done state on');
  click(todoText);
  assert(!todoText.classList.contains('done'), 'Clicking todo text again toggles done state off');

  click(deleteBtn);
  equal(list.children.length, 0, 'Clicking Delete removes the todo item');

  render('Todo Tests');
})();
