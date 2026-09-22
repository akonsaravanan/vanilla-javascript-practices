// TODO:
// Validate name/email and show inline errors or success.
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');

const submitBtn = document.getElementById('submit-btn');
const successMessage = document.getElementById('success-message');

submitBtn.addEventListener('click', function () {
  // Clear previous messages
  nameError.textContent = '';
  emailError.textContent = '';
  successMessage.textContent = '';

  let isValid = true;

  // ✅ Validate Name
  const nameValue = nameInput.value.trim();
  if (nameValue.length === 0) {
    nameError.textContent = 'Name is required';
    isValid = false;
  } else if (nameValue.length < 3) {
    nameError.textContent = 'Name must be at least 3 characters';
    isValid = false;
  }

  // ✅ Validate Email
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue.length === 0) {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    emailError.textContent = 'Enter a valid email';
    isValid = false;
  }

  // ✅ Success case
  if (isValid) {
    successMessage.textContent = 'Submitted!';

    // clear errors (already cleared above, but keeping explicit)
    nameError.textContent = '';
    emailError.textContent = '';
  }
});
