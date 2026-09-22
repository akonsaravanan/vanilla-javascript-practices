const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const submitBtn = document.getElementById('submit');
const searchInput = document.getElementById('search');
const tableBody = document.getElementById('table-body');
const sortName = document.getElementById('sort-name');

let contacts = [];
let sortAsc = true;

// ---------- Validation ----------
function validateName(name) {
  return name.trim() !== '';
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^\d{10}$/.test(phone);
}

// ---------- Render Table ----------
function renderTable(data) {
  tableBody.innerHTML = '';

  data.forEach((contact) => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = contact.name;

    const emailCell = document.createElement('td');
    emailCell.textContent = contact.email;

    const phoneCell = document.createElement('td');
    phoneCell.textContent = contact.phone;

    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(phoneCell);

    tableBody.appendChild(row);
  });
}

// ---------- Submit ----------
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  if (!validateName(name)) {
    alert('Invalid name');
    return;
  }

  if (!validateEmail(email)) {
    alert('Invalid email');
    return;
  }

  if (!validatePhone(phone)) {
    alert('Invalid phone number');
    return;
  }

  contacts.push({ name, email, phone });

  renderTable(contacts);

  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
});

// ---------- Search ----------
searchInput.addEventListener('input', () => {
  const value = searchInput.value.toLowerCase();

  const filtered = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(value) ||
      contact.email.toLowerCase().includes(value) ||
      contact.phone.includes(value)
    );
  });

  renderTable(filtered);
});

// ---------- Sort by Name ----------
sortName.addEventListener('click', () => {
  contacts.sort((a, b) => {
    if (sortAsc) {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  sortAsc = !sortAsc;
  renderTable(contacts);
});
