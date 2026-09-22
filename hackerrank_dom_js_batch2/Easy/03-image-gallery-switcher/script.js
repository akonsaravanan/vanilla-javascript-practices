// TODO:
// Update preview based on clicked thumb and keep only one active thumb.
const thumbBtn = document.querySelectorAll('.thumb');
const preview = document.getElementById('preview');
thumbBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    thumbBtn.forEach((ele) => ele.classList.remove('active'));
    btn.classList.add('active');
    preview.textContent = btn.getAttribute('data-label');
  });
});
