(() => {
  const { input, keydown, equal, render } = window.TestUtils;
  const boxes = document.querySelectorAll('.otp');

  boxes[0].focus();
  input(boxes[0], '7');
  equal(document.activeElement, boxes[1], 'Focus moves to second box after typing in first');

  input(boxes[1], '88');
  equal(boxes[1].value.length, 1, 'Second box keeps only one character');
  equal(document.activeElement, boxes[2], 'Focus moves to third box after typing in second');

  boxes[2].focus();
  boxes[2].value = '';
  keydown(boxes[2], 'Backspace');
  equal(document.activeElement, boxes[1], 'Backspace on empty box moves focus to previous box');

  render('OTP Tests');
})();
