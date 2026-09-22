// TODO:
// Implement validation, add, search, sort, and table render from a source array.
const nameInput = document.getElementById('name-input');
const phoneInput = document.getElementById('phone-input');
const addBtn = document.getElementById('add-btn');

const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');

const searchInput = document.getElementById('search-input');
const sortBtn = document.getElementById('sort-btn');

const tbody = document.getElementById('directory-body');

let contacts = [];
let isAsc = true;

// ✅ Render table
function render(data) {
  tbody.innerHTML = '';

  data.forEach((c) => {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = c.name;

    const tdPhone = document.createElement('td');
    tdPhone.textContent = c.phone;

    tr.appendChild(tdName);
    tr.appendChild(tdPhone);

    tbody.appendChild(tr);
  });
}

// ✅ Add contact
addBtn.addEventListener('click', function () {
  nameError.textContent = '';
  phoneError.textContent = '';

  let name = nameInput.value.trim();
  let phone = phoneInput.value.trim();

  let valid = true;

  // Name validation
  if (name.length < 3) {
    nameError.textContent = 'Min 3 characters required';
    valid = false;
  }

  // Phone validation
  if (!/^\d{10}$/.test(phone)) {
    phoneError.textContent = 'Enter 10 digit number';
    valid = false;
  }

  if (!valid) return;

  // Add to array
  contacts.push({ name, phone });

  render(contacts);

  // Clear inputs
  nameInput.value = '';
  phoneInput.value = '';
});

// ✅ Search
searchInput.addEventListener('input', function () {
  const value = searchInput.value.toLowerCase();

  const filtered = contacts.filter(
    (c) => c.name.toLowerCase().includes(value) || c.phone.includes(value)
  );

  render(filtered);
});

// ✅ Sort
sortBtn.addEventListener('click', function () {
  contacts.sort((a, b) =>
    isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  render(contacts);

  isAsc = !isAsc;
});
