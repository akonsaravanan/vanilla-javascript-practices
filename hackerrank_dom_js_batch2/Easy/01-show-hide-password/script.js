// TODO:
// Toggle the password input type and button label.
const pwd = document.getElementById('password-input');
const toggle = document.getElementById('toggle-password');

toggle.onclick = () => {
  const existingType = pwd.getAttribute('type');
  if (existingType === 'password') {
    pwd.setAttribute('type', 'text');
    toggle.textContent = 'Hide';
  } else {
    pwd.setAttribute('type', 'password');
    toggle.textContent = 'Show';
  }
};
