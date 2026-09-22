// TODO:
// Implement star rating selection and numeric display.
const ratingValue = document.getElementById('rating-value');
const stars = document.getElementById('stars');
const bts = document.querySelectorAll('.star');

let count = 0;

stars.addEventListener('click', (e) => {
  if (e.target.classList.contains('star')) {
    const currValue = e.target.getAttribute('data-value');
    count = currValue;
    ratingValue.textContent = count;
  }

  bts.forEach((btnEle) => {
    btnEle.classList.remove('active');
  });

  bts.forEach((Element, index) => {
    if (count > 0 && count >= index + 1) {
      Element.classList.add('active');
    }
  });
});
