(async function () {
  const { assert, click, keydown, render } = window.TestUtils;
  const openBtn = document.getElementById('open-modal');
  const closeBtn = document.getElementById('close-modal');
  const overlay = document.getElementById('modal-overlay');
  const modal = document.getElementById('modal');

  click(openBtn);
  assert(overlay.classList.contains('open'), 'Modal opens when Open Modal is clicked');

  click(modal);
  assert(overlay.classList.contains('open'), 'Clicking inside modal does not close it');

  click(closeBtn);
  assert(!overlay.classList.contains('open'), 'Modal closes when Close is clicked');

  click(openBtn);
  click(overlay);
  assert(!overlay.classList.contains('open'), 'Modal closes when overlay is clicked');

  click(openBtn);
  keydown('Escape');
  assert(!overlay.classList.contains('open'), 'Modal closes when Escape is pressed');

  render('Modal Tests');
})();
