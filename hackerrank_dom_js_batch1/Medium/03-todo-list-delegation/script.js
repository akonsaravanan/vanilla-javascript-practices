// TODO: Write your solution here.
// Requirements:
// 1) Add a new todo item using the value from #todo-input.
// 2) Ignore empty or whitespace-only values.
// 3) Create markup similar to:
//    <li class="todo-item">
//      <span class="todo-text">Task</span>
//      <button class="delete-btn">Delete</button>
//    </li>
// 4) Toggle .done when .todo-text is clicked.
// 5) Remove the item when .delete-btn is clicked.

const addBtn = document.getElementById('add-todo');
const list = document.getElementById('todo-list');
const input = document.getElementById('todo-input');

const markup = (content) => `<li class="todo-item">
     <span class="todo-text">${content}</span>
     <button class="delete-btn">Delete</button>
   </li>`;

addBtn.onclick = () => {
  const value = input.value.trim();
  if (!value) return;
  list.innerHTML += markup(value);
  input.value = '';
};

list.onclick = (e) => {
  if (e.target.classList.contains('todo-text')) {
    e.target.classList.toggle('done');
  }
  if (e.target.classList.contains('delete-btn')) {
    console.log(e.target, e.target.parentElement);
    e.target.parentElement.remove();
  }
};
