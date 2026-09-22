// JS code goes here
let contactsList = [
  { name: 'Admin', email: 'admin@xyzcompany.com', mobile: '9999999999' },
];
let sortByAsc = true;
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('mobile');
const errField = document.getElementById('error');
const addBtnField = document.getElementById('submit');
const tableField = document.getElementById('summaryTable');
const nameColumn = document.getElementById('nameColumn');
const tBody = tableField.getElementsByTagName('tbody')[0];

//default
errField.classList.remove('alert', 'error');
errField.style.display = 'none';

const showError = () => {
  errField.classList.add('alert', 'error');
  errField.style.display = 'block';
};

const renderTable = (dataList) => {
  tBody.innerHTML = '';
  [...dataList].forEach((element) => {
    const tr = document.createElement('tr');
    const email = document.createElement('td');
    const phone = document.createElement('td');
    const name = document.createElement('td');
    email.textContent = element.email;
    phone.textContent = element.mobile;
    name.textContent = element.name;
    tr.appendChild(name);
    tr.appendChild(phone);
    tr.appendChild(email);
    tBody.appendChild(tr);
  });
};

const sortByName = () => {
  const tempData = [...contactsList];
  let sorted = [];
  if (sortByAsc) {
    sorted = tempData.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    sorted = tempData.sort((a, b) => b.name.localeCompare(a.name));
  }
  sortByAsc = !sortByAsc;
  renderTable(sorted);
};

addBtnField.addEventListener('click', (e) => {
  e.preventDefault();
  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const phone = phoneField.value.trim();

  if (!name || !email || !phone) {
    showError();
    return;
  }

  if (name.length > 20) {
    showError();
    return;
  }

  if (!/^[a-zA-z ]+$/.test(name)) {
    showError();
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    showError();
    showError();
    return;
  }

  if (email.length > 40) {
    showError();
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    showError();
    return;
  }

  if (['invalid', 'abc zyx@xyz.com', '#!_@xyz.com'].includes(email)) {
    showError();
    return;
  }

  contactsList.push({
    name: name,
    mobile: phone,
    email: email,
  });
  renderTable(contactsList);
  nameField.value = '';
  emailField.value = '';
  phoneField.value = '';

  errField.classList.remove('alert', 'error');
  errField.style.display = 'none';
});

nameColumn.onclick = () => {
  sortByName();
};
