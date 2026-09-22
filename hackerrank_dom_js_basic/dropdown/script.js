// TODO:
// 1. Toggle the dropdown menu when button is clicked.
// 2. Close the menu when clicking anywhere outside the dropdown.
const dropdown = document.querySelector('.dropdown');
const btn = document.getElementById('dropdown-btn');
const menu = document.getElementById('dropdown-menu');

btn.onclick = () => {
  menu.classList.toggle('open');
};

document.addEventListener('click', (e) => {
  e.preventDefault();
  if (!dropdown.contains(e.target)) {
    menu.classList.remove('open');
  }
});
