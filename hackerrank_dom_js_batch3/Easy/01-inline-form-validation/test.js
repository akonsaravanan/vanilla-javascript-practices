(() => {
  const { click, input, equal, render } = window.TestUtils;
  const name = document.getElementById('name-input');
  const email = document.getElementById('email-input');
  const submit = document.getElementById('submit-btn');
  const nameErr = document.getElementById('name-error');
  const emailErr = document.getElementById('email-error');
  const success = document.getElementById('success-message');

  click(submit);
  equal(nameErr.textContent.trim().length > 0, true, 'Shows name error for empty input');
  equal(emailErr.textContent.trim().length > 0, true, 'Shows email error for empty input');

  input(name, 'Sa');
  input(email, 'badmail');
  click(submit);
  equal(nameErr.textContent.trim().length > 0, true, 'Shows name error for short name');
  equal(emailErr.textContent.trim().length > 0, true, 'Shows email error for invalid email');

  input(name, 'Saravanan');
  input(email, 'saravanan@example.com');
  click(submit);
  equal(nameErr.textContent.trim(), '', 'Clears name error after valid submit');
  equal(emailErr.textContent.trim(), '', 'Clears email error after valid submit');
  equal(success.textContent.trim(), 'Submitted!', 'Shows success message on valid submit');

  render('Inline Form Validation Tests');
})();
