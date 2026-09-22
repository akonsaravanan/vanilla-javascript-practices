// TODO:
// Implement add, edit/save, and delete using event delegation.
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

// Add todo item
addBtn.addEventListener('click', () => {
  const value = input.value.trim();

  if (!value) return;

  list.insertAdjacentHTML(
    'beforeend',
    `
    <li class="todo-item">
      <span class="todo-text">${value}</span>
      <button class="edit-btn" type="button">Edit</button>
      <button class="delete-btn" type="button">Delete</button>
    </li>
    `
  );

  input.value = '';
});

// Event delegation for Edit / Save / Delete
list.addEventListener('click', (e) => {
  const item = e.target.closest('.todo-item');
  if (!item) return;

  // Delete
  if (e.target.classList.contains('delete-btn')) {
    item.remove();
  }

  // Edit
  if (e.target.classList.contains('edit-btn')) {
    const text = item.querySelector('.todo-text').textContent;

    item.innerHTML = `
      <input class="edit-input" type="text" value="${text}" />
      <button class="save-btn" type="button">Save</button>
      <button class="delete-btn" type="button">Delete</button>
    `;
  }

  // Save
  if (e.target.classList.contains('save-btn')) {
    const updatedValue = item.querySelector('.edit-input').value.trim();

    if (!updatedValue) return;

    item.innerHTML = `
      <span class="todo-text">${updatedValue}</span>
      <button class="edit-btn" type="button">Edit</button>
      <button class="delete-btn" type="button">Delete</button>
    `;
  }
});
