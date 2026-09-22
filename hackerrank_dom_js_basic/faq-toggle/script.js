// TODO:
// Toggle only the clicked FAQ item.
// Multiple items can stay open.

const items = document.querySelectorAll('.item');

items.forEach((element) => {
  const Q = element.querySelector('.question');
  Q.addEventListener('click', () => {
    element.classList.toggle('open');
  });
});
