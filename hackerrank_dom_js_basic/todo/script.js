// TODO:
// 1. Add a new <li> to #todo-list when Add is clicked.
// 2. Ignore empty input values.
// 3. Optional: click an item to mark it done.

const addBtn = document.getElementById('add-todo');
const list = document.getElementById('todo-list');
const input = document.getElementById('todo-input');

addBtn.onclick = (e) => {
  const li = document.createElement('li');
  if (input.value.trim()) {
    li.textContent = input.value;
    li.className = 'list-item';
    li.addEventListener('click', () => {
      li.classList.toggle('done');
    });
    list.appendChild(li);
  }
  input.value = '';
};
