// TODO: Write your solution here.
// Requirements:
// 1) Open the overlay when #open-modal is clicked.
// 2) Close the overlay when #close-modal is clicked.
// 3) Close when clicking the overlay outside the modal.
// 4) Close on Escape key.
// TODO:
// 1. Open modal when #open-modal is clicked.
// 2. Close modal when #close-modal is clicked.
// 3. Bonus: close on outside click or Escape key.

const open = document.getElementById('open-modal');
const close = document.getElementById('close-modal');
const modalOverlay = document.getElementById('modal-overlay');
open.onclick = () => {
  modalOverlay.classList.add('open');
};
close.onclick = () => {
  modalOverlay.classList.remove('open');
};

document.onclick = (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('open');
  }
};

document.onkeydown = (e) => {
  if (e.key === 'Escape') {
    modalOverlay.classList.remove('open');
  }
};
