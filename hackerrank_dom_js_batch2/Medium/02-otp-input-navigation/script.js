// TODO:
// Implement OTP input auto-next and backspace navigation.
const otpBoxes = document.querySelectorAll('.otp-boxes');
const otp = document.querySelectorAll('.otp');

otp.forEach((field) => {
  field.addEventListener('input', (e) => {
    if (field.value !== '') {
      const value = field.value.length > 1 ? field.value.slice(0, 1) : field.value;
      field.value = value;
      e?.target?.nextElementSibling?.focus();
    }
  });
  field.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      field.value = '';
      e.target.previousElementSibling.focus();
    }
  });
});
