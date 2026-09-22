// TODO:
// Allow only one list item to stay selected at any time.
const item = document.querySelectorAll('.item');
item.forEach((ele) => {
  ele.addEventListener('click', () => {
    item.forEach((Element) => {
      Element.classList.remove('selected');
    });
    ele.classList.add('selected');
  });
});
